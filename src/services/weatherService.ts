import { WeatherData, WeatherError } from "@/types/weather";
import axios, { AxiosResponse } from "axios";



export type WeatherResponse = {success: true, data: WeatherData} | {success: false, error: string};

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_OPENWEATHER_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
        q: "", // Cidade será definida dinamicamente
        lang: "pt_br",
        units: "metric"
    },
    timeout: 10000, // 10 segundos
    headers: {
        'Content-Type': 'application/json'
    }
})

const getErrorMessage = (statusCode: number): string => {
    switch (statusCode) {
        case 400:
            return "Requisição inválida. Verifique os parâmetros enviados.";

        case 401:
            return "Chave de API inválida. Verifique sua chave de API.";

        case 404:
            return "Cidade não encontrada. Verifique o nome da cidade e tente novamente.";

        case 500:
            return "Erro no servidor. Tente novamente mais tarde.";

        case 501:
            return "Recurso não implementado. Tente novamente mais tarde.";

        case 502:
            return "Erro de gateway. Tente novamente mais tarde.";

        case 503:
            return "Serviço indisponível. Tente novamente mais tarde.";

        default:
            return "Erro desconhecido. Tente novamente.";
    }
}

export const getCurrentWeather = async (cityName: string): Promise<WeatherResponse> => {

    try {
        
        const trimmedCity = cityName.trim();
        if (!trimmedCity) {
            return { success: false, error: "O nome da cidade não pode estar vazio." };
        }

        const response: AxiosResponse<WeatherData> = await api.get("/weather", {
            params: {
                q: trimmedCity
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessage = getErrorMessage(error.response.status);
                return { success: false, error: errorMessage };
            } else if (error.request) {
                return { success: false, error: "Nenhuma resposta recebida do servidor. Verifique sua conexão com a internet." };
            } else {
                return { success: false, error: "Erro ao configurar a requisição. Tente novamente." };
            }
        }
        return { success: false, error: "Erro ao buscar dados meteorológicos." };
    }
}

export const getWeatherByCoordinates = async (latitude: number, longitude: number): Promise<WeatherResponse> => {
    try {
        const response: AxiosResponse<WeatherData> = await api.get("/weather", {
            params: {
                lat: latitude,
                lon: longitude
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (axios.isAxiosError<WeatherError>(error)) {
            if (error.response) {
                const errorMessage = getErrorMessage(error.response.status);
                return { success: false, error: errorMessage };
            } else if (error.request) {
                return { success: false, error: "Nenhuma resposta recebida do servidor. Verifique sua conexão com a internet." };
            } else {
                return { success: false, error: "Erro ao configurar a requisição. Tente novamente." };
            }
        }
        return { success: false, error: "Erro ao buscar dados meteorológicos." };
    }
}

export const getWeatherIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}