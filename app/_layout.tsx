import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "/app/login",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
