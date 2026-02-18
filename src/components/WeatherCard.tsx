import { getWeatherIconUrl } from "@/services/weatherService"
import { weatherCardStyles } from "@/styles/weathercard.styles"
import { WeatherData } from "@/types/weather"
import { Image, Text, View } from "react-native"


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

      <Text style={weatherCardStyles.temperature}>
        {Math.round(weather.main.temp)} °C
      </Text>

      {description && (
        <Text style={weatherCardStyles.description}>
          {description}
        </Text>
      )}

      <View style={weatherCardStyles.details}>
        <Text>
          Sensação Térmica:{" "}
          {Math.round(weather.main.feels_like)} °C
        </Text>

        <Text>
          Umidade: {weather.main.humidity} %
        </Text>

        <Text>
          Vento: {weather.wind.speed} m/s
        </Text>
      </View>
    </View>
  )
}
