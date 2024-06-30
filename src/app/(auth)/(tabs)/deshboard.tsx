import { Background } from "@/components/Background";
import { View, Text } from "react-native";

export default function Deshboard() {
  return (
    <Background source={require("@/assets/imagens/background2.jpg")}>
      <View className="flex-1"></View>
    </Background>
  );
}
