import { useAuth } from "@clerk/clerk-expo";

import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();
  return (
    <Background source={require("@/assets/imagens/background2.jpg")}>
      <View className="flex-1 items-center justify-center">
        <Button title="Sair" onPress={() => signOut()} />
      </View>
    </Background>
  );
}
