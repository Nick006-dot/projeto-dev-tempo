


export const getTemperatureColor = (temperature: number): string => {
    if (temperature <= 0) {
        return '#00BFFF'; // Azul para temperaturas muito frias
    } else if (temperature > 0 && temperature <= 15) {
        return '#1E90FF'; // Azul claro para temperaturas frias
    } else if (temperature > 15 && temperature <= 25) {
        return '#FFD700'; // Amarelo para temperaturas amenas
    } else if (temperature > 25 && temperature <= 35) {
        return '#FF8C00'; // Laranja para temperaturas quentes
    } else {
        return '#FF4500'; // Vermelho para temperaturas muito quentes
    }

    return '#000'; // Cor padrão (preto) caso a temperatura seja inválida
}