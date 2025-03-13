import { authStore } from "@/store";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, View, Text, TextInput, StyleSheet } from "react-native";

export default function Login() {
  const [username, setUsername] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const user = authStore.useState((s) => s.user);

  const handleLogin = () => {
    if (!user?.username || !user?.password) {
      setUsername((value) => ({ ...value, error: true }));
      setPassword((value) => ({ ...value, error: true }));
      return;
    }
    if (user.username !== username.value.trim()) {
      setUsername((value) => ({ ...value, error: true }));
    }
    if (user.password !== password.value.trim()) {
      setPassword((value) => ({ ...value, error: true }));
    } else if (
      user.username === username.value.trim() &&
      user.password === password.value.trim()
    ) {
      setUsername((value) => ({ ...value, error: false }));
      setPassword((value) => ({ ...value, error: false }));
      authStore.update((s) => {
        s.isAuth = true;
      });
      router.push("/(app)");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            marginBottom: 20,
            fontFamily: "Montserrat_700Bold",
          }}
        >
          QuickApp
        </Text>
        <View
          style={{
            gap: 8,
          }}
        >
          <TextInput
            placeholder="Username"
            style={[
              styles.input,
              { borderColor: password.error ? "red" : "#000" },
            ]}
            onChangeText={(text) => setUsername({ value: text, error: false })}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={[
              styles.input,
              { borderColor: password.error ? "red" : "#000" },
            ]}
            onChangeText={(text) => setPassword({ value: text, error: false })}
          />
          <Pressable
            onPress={handleLogin}
            style={{
              borderWidth: 1,
              backgroundColor: "#000",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Montserrat_400Regular",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Link
            href="/register"
            style={{
              marginTop: 20,
              fontSize: 16,
              textDecorationLine: "underline",
              fontFamily: "Montserrat_400Regular",
            }}
          >
            Register
          </Link>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 12,
    borderRadius: 12,
    fontFamily: "Montserrat_400Regular",
  },
});
