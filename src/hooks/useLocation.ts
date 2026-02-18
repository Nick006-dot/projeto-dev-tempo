import * as Location from 'expo-location'
import { useState } from 'react'

interface Coordinates {
  latitude: number
  longitude: number
}

type LocationResult =
  | { success: true; coordinates: Coordinates }
  | { success: false; error: string }

export const useLocation = () => {
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = async (): Promise<LocationResult> => {
    try {
      setLoading(true)

      const { status } =
        await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        return {
          success: false,
          error: 'Permission to access location was denied',
        }
      }

      const location =
        await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        })

      return {
        success: true,
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      }
    } catch (error) {
      return {
        success: false,
        error: 'Failed to get location',
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    getCurrentLocation,
  }
}
