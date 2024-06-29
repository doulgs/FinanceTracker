import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { Button } from "@/components/Button";

const DIM_HEIGHT = Dimensions.get("screen").height;
const DIM_WIDTH = Dimensions.get("screen").width;

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  const [isLoading, setIsLoading] = useState(false);

  async function onGoogleSingIn() {
    try {
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        console.error("Google Sign-In failed");
      }
    } catch (error) {
      console.error("Google Sign-In error", error);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <ImageBackground
      style={{ width: DIM_WIDTH, height: DIM_HEIGHT }}
      source={require("@/assets/imagens/background.png")}
      className="flex-1  items-center justify-center p-8"
    >
      <Image
        source={require("@/assets/imagens/logo.png")}
        resizeMode="contain"
        className="h-80"
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
        <Button title="Acessar evento" onPress={onGoogleSingIn} />
      </View>
    </ImageBackground>
  );
}
