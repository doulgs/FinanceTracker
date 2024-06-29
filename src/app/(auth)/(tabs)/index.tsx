import { Background } from "@/components/Background";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text, Image } from "react-native";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <Background source={require("@/assets/imagens/background2.jpg")}>
      <View className="flex-1"></View>
    </Background>
  );
}
