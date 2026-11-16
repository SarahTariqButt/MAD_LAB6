import { Stack } from "expo-router";
import { Text } from "react-native";
export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: "green" },
      headerTintColor: "white",
      headerTitle:"Books List",
      headerRight: () => (
          <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
            BSEF24M020
          </Text>
        ),
    }}>
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
}