import { colors } from "@/styles";
import {
  AntDesign,
  Foundation,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import { View } from "react-native";

import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { useRef } from "react";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };
  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  return (
    <View className="flex-1">
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.green[600],
          tabBarInactiveTintColor: colors.gray[500],
          tabBarStyle: {
            backgroundColor: colors.gray[800],
            borderColor: colors.gray[800],
            borderWidth: 0,
            elevation: 0,
            position: "absolute",
            margin: 25,
            height: 65,
            borderRadius: 16,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="deshboard"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="pie-chart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Foundation name="plus" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen();
            },
          })}
        />
        <Tabs.Screen
          name="historic"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons name="checklist" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Avatar selected={focused} />
            ),
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  );
}
