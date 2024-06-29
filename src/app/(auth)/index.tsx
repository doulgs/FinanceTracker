import { Button } from "@/components/button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text, Image } from "react-native";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <View className=" items-center justify-center flex-1 bg-gray-900">
      <Text className="text-white font-medium text-lg">
        Hello Word! {user?.id}
      </Text>

      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 42, height: 42 }}
      />

      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
