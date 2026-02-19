import { getWeatherIconUrl } from "@/services/weatherService"
import { weatherCardStyles } from "@/styles/weathercard.styles"
import { WeatherData } from "@/types/weather"
import { Image, Text, View } from "react-native"
import { getTemperatureColor } from "./ChangeTemperatureColor"


interface WeatherProps {
  weather: WeatherData
}

export default function WeatherCard({ weather }: WeatherProps) {
  const icon = weather.weather?.[0]?.icon
  const description = weather.weather?.[0]?.description

  return (
    <View style={weatherCardStyles.card}>
      <Text style={weatherCardStyles.cityName}>
        {weather.name}
      </Text>

      {icon && (
        <Image
          source={{ uri: getWeatherIconUrl(icon) }}
          style={weatherCardStyles.icon}
        />
      )}

      <Text style={[weatherCardStyles.temperature, { color: getTemperatureColor(weather.main.temp) }]}>
        {Math.round(weather.main.temp)}°C
      </Text>

      {description && (
        <Text style={weatherCardStyles.description}>
          {description}
        </Text>
      )}

      <View style={weatherCardStyles.detailsContainer}>
        <View style={weatherCardStyles.detailItem}>
        <Text style={weatherCardStyles.detailLabel}>
          Sensação Térmica:{" "}
          {Math.round(weather.main.feels_like)}°C
        </Text>

        <Text style={weatherCardStyles.detailLabel}>
          Umidade: {weather.main.humidity} %
        </Text>

        <Text style={weatherCardStyles.detailLabel}>
          Vento: {weather.wind.speed} m/s
        </Text>
        </View>
      </View>
    </View>
  )
}
