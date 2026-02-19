import { detailsStyles } from "@/styles/details.style";
import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getCurrentWeather } from "@/services/weatherService";
import { use, useEffect, useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import { WeatherData } from "@/types/weather";


export default function Details() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const router = useRouter();
    const { city } = useLocalSearchParams<{ city: string }>();

    useEffect(() => {
        if (city) getWeatherData();

    }, [city])


    const getWeatherData = async () => {
        // Lógica para buscar dados do clima
        setLoading(true);
        setError(null);

        const result = await getCurrentWeather(city as string);

        setLoading(false);

        if (result.success) {
            setWeatherData(result.data);
        } else {
            setError(result.error);
        }

    }

    return (
        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={detailsStyles.container}>
                <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
                    <Text style={detailsStyles.backButtonText}>Voltar</Text>
                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.title}>Clima atual</Text>
                    <Text style={detailsStyles.subtitle}>Buscando: {city}</Text>
                </View>

                {loading && (
                    <View style={detailsStyles.loadingContainer}>
                        <ActivityIndicator size="large" color="#4a90e2" />
                        <Text style={detailsStyles.loadingText}>Carregando dados...</Text>
                    </View>
                )}

                {!loading && error && (
                    <View style={detailsStyles.errorContainer}>
                        <Text style={detailsStyles.errorText}>{error}</Text>
                        <TouchableOpacity style={detailsStyles.retryButton} onPress={getWeatherData}>
                            <Text style={detailsStyles.retryButtonText}>Tentar novamente</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {!loading && weatherData && (
                    <WeatherCard weather={weatherData} />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}