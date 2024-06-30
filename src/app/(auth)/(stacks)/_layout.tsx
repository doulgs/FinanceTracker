import { Stack } from "expo-router";
import { View } from "react-native";

export default function StackLayout() {
  return (
    <View className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="notifications" />
        <Stack.Screen name="categories" />
        <Stack.Screen name="[type]" />
      </Stack>
    </View>
  );
}
