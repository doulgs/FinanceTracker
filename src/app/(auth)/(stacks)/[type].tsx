import { Background } from "@/components/Background";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function NewMoviment() {
  const { type } = useLocalSearchParams();
  return (
    <Background source={require("@/assets/imagens/background2.jpg")}>
      <View className="flex-1 items-center justify-center">
        {type === "receita" ? (
          <Text>Adiconar Movimentação</Text>
        ) : (
          <Text>Remover </Text>
        )}
      </View>
    </Background>
  );
}
