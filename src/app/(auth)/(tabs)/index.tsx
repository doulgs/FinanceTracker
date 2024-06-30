import { useUser } from "@clerk/clerk-expo";

import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { ScrollView, View } from "react-native";

export default function Home() {
  const { user } = useUser();

  return (
    <Background source={require("@/assets/imagens/background2.jpg")}>
      <View className="flex-1">
        <Header
          username={user?.fullName}
          balance={3000}
          income={3000}
          expense={3000}
        />
        <ScrollView className="p-4 mb-28">
          <View className="w-full h-56 bg-black mb-28"></View>
        </ScrollView>
      </View>
    </Background>
  );
}
