import { Link, router } from "expo-router";
import { Pressable, View, Text, TextInput } from "react-native";
import { styles } from "./login";
import { useState } from "react";
import { authStore } from "@/store";

export default function Register() {
  const [name, setName] = useState({ value: "", error: false });
  const [username, setUsername] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });

  const handleRegister = () => {
    if (!name.value.trim()) {
      setName((value) => ({ ...value, error: true }));
    }
    if (!password.value.trim()) {
      setPassword((value) => ({ ...value, error: true }));
    }
    if (!username.value.trim()) {
      setUsername((value) => ({ ...value, error: true }));
    } else if (
      name.value.trim() &&
      password.value.trim() &&
      username.value.trim()
    ) {
      authStore.update((s) => {
        s.user = {
          name: name.value,
          username: username.value,
          password: password.value,
        };
      });
      router.push("/login");
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
            placeholder="Name"
            style={[styles.input, { borderColor: name.error ? "red" : "#000" }]}
            onChangeText={(text) => setName({ value: text, error: false })}
          />
          <TextInput
            placeholder="Username"
            style={[
              styles.input,
              { borderColor: username.error ? "red" : "#000" },
            ]}
            onChangeText={(text) => setUsername({ value: text, error: false })}
          />
          <TextInput
            placeholder="Password"
            style={[
              styles.input,
              { borderColor: password.error ? "red" : "#000" },
            ]}
            onChangeText={(text) => setPassword({ value: text, error: false })}
          />
          <Pressable
            onPress={handleRegister}
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
              Register
            </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Link
            href="/login"
            style={{
              marginTop: 20,
              fontSize: 16,
              textDecorationLine: "underline",
              fontFamily: "Montserrat_400Regular",
            }}
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  );
}
