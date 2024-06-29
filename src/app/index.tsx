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
      {/* <Image
        source={require("@/assets/imagens/logo.png")}
        resizeMode="contain"
        className="h-28"
      /> */}
      <View className="w-full mt-12 gap-4">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color="white"
            size={24}
          />
          <Input.Field
            placeholder="Código do evento"
            value={code}
            onChangeText={(t) => setCode(t)}
          />
          {code.length > 0 && (
            <Pressable onPress={() => setCode("")}>
              <MaterialCommunityIcons name="close" size={24} color="#666" />
            </Pressable>
          )}
        </Input>

        <Button title="Acessar evento" onPress={handleValidateCode} />
      </View>
    </ImageBackground>
  );
}
