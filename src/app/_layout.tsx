import "../styles/global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//FONT
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Slot } from "expo-router";

import { Loading } from "@/components/loading";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "SanFranciscoPro-400": require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
    "SanFranciscoPro-600": require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SanFranciscoPro-700": require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  );
}
