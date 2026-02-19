import SearchBar from "@/components/SearchBar"
import { homeStyle } from "@/styles/home.styles"
import { useRouter } from "expo-router"
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useLocation } from "@/hooks/useLocation"
import { getWeatherByCoordinates } from "@/services/weatherService"

export default function App() {
  const { getCurrentLocation, loading } = useLocation()
  const router = useRouter()

  const handleSearch = (city: string) => {
    router.push({
      pathname: "/details",
      params: { city },
    })
  }

  const handleLocation = async () => {
    const locationResult = await getCurrentLocation()

    if (!locationResult.success) {
      alert(locationResult.error)
      return
    }

    const { latitude, longitude } = locationResult.coordinates

    const weatherResult = await getWeatherByCoordinates(
      latitude,
      longitude
    )

    if (!weatherResult.success) {
      alert(weatherResult.error)
      return
    }

    router.push({
      pathname: "/details",
      params: { city: weatherResult.data.name },
    })
  }

  return (
    <SafeAreaView style={homeStyle.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={homeStyle.header}>
          <Text style={homeStyle.title}>Dev-Tempo</Text>
          <Text style={homeStyle.subtitle}>
            Busque o clima em qualquer cidade
          </Text>
        </View>

        <SearchBar onSearch={handleSearch} />

        <TouchableOpacity
          style={homeStyle.gpsButton}
          onPress={handleLocation}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={homeStyle.gpsButtonText}>
              Obter localização atual
            </Text>
          )}
        </TouchableOpacity>

        <View style={homeStyle.emptyContainer}>
          <Text style={homeStyle.emptyText}>
            Digite o nome da cidade para obter a previsão do tempo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
