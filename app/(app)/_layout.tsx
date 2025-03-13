import { View } from "react-native";
import { authStore } from "@/store";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const auth = authStore.useState((s) => s);

  if (!auth.isAuth) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
