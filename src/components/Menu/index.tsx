import BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { forwardRef } from "react";
import { Text, View } from "react-native";

import { MenuButtom } from "../MenuButtom";
import { MenuProps } from "./menu";

import { Icon_Dollar_Down } from "@/assets/icons/dollar-down";
import { Icon_Dollar_List } from "@/assets/icons/dollar-list";
import { Icon_Dollar_Up } from "@/assets/icons/dollar-up";

import { colors } from "@/styles";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 250]}
      backgroundStyle={{ backgroundColor: colors.gray[800] }}
      handleComponent={() => null}
    >
      <View className="flex-1 p-4 bg-gray-800 rounded-3xl">
        <View className="mt-4">
          <Text className="text-center text-2xl font-medium text-gray-100">
            Menu de ações
          </Text>
        </View>
        <View className="flex-1 flex-row items-center justify-center gap-8">
          <MenuButtom
            title={"Receitas"}
            onPress={() => {
              router.push("(stacks)/receita");
              onClose();
            }}
          >
            <Icon_Dollar_Up />
          </MenuButtom>
          <MenuButtom
            title={"Despesas"}
            onPress={() => {
              router.push("(stacks)/despesa");
              onClose();
            }}
          >
            <Icon_Dollar_Down />
          </MenuButtom>
          <MenuButtom
            title={"Categorias"}
            onPress={() => {
              router.push("(stacks)/categories");
              onClose();
            }}
          >
            <Icon_Dollar_List />
          </MenuButtom>
        </View>
      </View>
    </BottomSheet>
  );
});
