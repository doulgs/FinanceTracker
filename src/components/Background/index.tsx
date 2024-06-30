import React from "react";
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  View,
} from "react-native";

const DIM_HEIGHT = Dimensions.get("screen").height;
const DIM_WIDTH = Dimensions.get("screen").width;

type BackgroundProps = {
  source: ImageSourcePropType;
  children?: React.ReactNode;
};

function Background({ source, children }: BackgroundProps) {
  return (
    <ImageBackground
      style={{ width: DIM_WIDTH, height: DIM_HEIGHT }}
      source={source}
      resizeMode="cover"
      className="flex-1"
    >
      <View
        className="flex-1"
        style={{ backgroundColor: "rgba(20, 20, 20,0.8)" }}
      >
        {children}
      </View>
    </ImageBackground>
  );
}

export { Background };
