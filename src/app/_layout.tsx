import "../styles/global.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Loading } from "@/components/Loading";
import { tokenChache } from "@/storage/tokenCache";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Slot, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

function InitializeLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("(auth)");
    } else {
      router.replace("(public)");
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  ) : (
    <Loading />
  );
}

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
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenChache}>
        <ClerkLoaded>
          <InitializeLayout />
        </ClerkLoaded>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}
