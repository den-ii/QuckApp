import { authStore } from "@/store";
import { Redirect, router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const name = authStore.useState((s) => s.user?.username);

  const logout = () => {
    authStore.update((s) => {
      s.isAuth = false;
    });
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: "#333",
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          Dashboard
        </Text>
        <Pressable
          onPress={logout}
          style={{
            padding: 12,
            backgroundColor: "#ECEFF1",
            borderRadius: 12,
          }}
        >
          <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>Logout</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            color: "#333",
            fontFamily: "Montserrat_600SemiBold",
            textTransform: "capitalize",
          }}
        >
          Hello 👋, {name}
        </Text>
      </View>
    </SafeAreaView>
  );
}
