import { ActivityIndicator, Dimensions, ImageBackground } from "react-native";

const DIM_HEIGHT = Dimensions.get("screen").height;
const DIM_WIDTH = Dimensions.get("screen").width;

export function Loading() {
  return (
    <ImageBackground
      style={{ width: DIM_WIDTH, height: DIM_HEIGHT }}
      source={require("@/assets/imagens/background.png")}
      className="flex-1  items-center justify-center p-8"
    >
      <ActivityIndicator
        className="flex-1 items-center justify-center text-blue-300"
        size={52}
      />
    </ImageBackground>
  );
}
