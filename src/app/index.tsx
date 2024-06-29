import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from "react-native";

const DIM_HEIGHT = Dimensions.get("screen").height;
const DIM_WIDTH = Dimensions.get("screen").width;

export default function Home() {
  const [code, setCode] = useState<string>("");

  function handleValidateCode() {
    if (code !== "ddsd") {
      ToastAndroid.show("Código não localizado", ToastAndroid.LONG);
      return;
    }

    //router.push("./CheckTicket");
  }

  return (
    <ImageBackground
      style={{ width: DIM_WIDTH, height: DIM_HEIGHT }}
      source={require("@/assets/imagens/background.png")}
      className="flex-1  items-center justify-center p-8"
    >
      <Image
        source={require("@/assets/imagens/logo.png")}
        resizeMode="contain"
        className="h-72"
      />
      <View className="w-full mt-4">
        <Text
          className="text-5xl text-gray-500 font-bold"
          style={{ textAlign: "center" }}
        >
          Retome o controle da sua vida financeira
        </Text>
      </View>
      <View className="absolute bottom-8">
        <Button title="Acessar evento" onPress={handleValidateCode} />
      </View>
    </ImageBackground>
  );
}
