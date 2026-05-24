import { Coord } from "@/types/weather";
import MapView, { Marker, UrlTile } from "react-native-maps";
import { View, StyleSheet } from "react-native";

const OWM_API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

const tileUrl = (layer: string) =>
  `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${OWM_API_KEY}`;

interface WeatherMapProps {
  coord: Coord;
  cityName: string;
}

export default function WeatherMap({ coord, cityName }: WeatherMapProps) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coord.lat,
          longitude: coord.lon,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <Marker
          coordinate={{ latitude: coord.lat, longitude: coord.lon }}
          title={cityName}
        />

        <UrlTile
          urlTemplate={tileUrl("precipitation")}
          opacity={0.6}
          zIndex={1}
        />
        <UrlTile
          urlTemplate={tileUrl("temp")}
          opacity={0.4}
          zIndex={2}
        />
        <UrlTile
          urlTemplate={tileUrl("clouds")}
          opacity={0.3}
          zIndex={3}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  map: {
    height: 300,
    width: "100%",
  },
});