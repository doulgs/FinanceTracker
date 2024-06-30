import { Icon_Dollar_Down } from "@/assets/icons/dollar-down";
import { Icon_Dollar_Up } from "@/assets/icons/dollar-up";
import { colors } from "@/styles";
import { formatToCurrency } from "@/utils/formatToCurrency";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StatusBar, Image } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

function Header({
  username,
  balance = 0,
  income = 0,
  expense = 0,
  unreadNotif = 0,
}: HeaderProps) {
  function renderUserName(userName: string | null | undefined) {
    if (typeof userName !== "string") {
      return "Desconhecido";
    } else {
      return userName;
    }
  }

  return (
    <>
      <View className="w-full h-80 rounded-b-3xl bg-gray-800">
        <View className="flex-1 p-6" style={{ paddingTop: STATUSBAR_HEIGHT }}>
          {/* HEADER */}
          <View className="flex-row w-full pt-4 items-center justify-between ">
            <View>
              <Text
                className="text-gray-100 text-3xl font-medium"
                numberOfLines={1}
              >
                Bom dia, {renderUserName(username)}
              </Text>
              <Text className="text-gray-300 font-regular">
                Mantenha suas contas em dia
              </Text>
            </View>

            <View className="border border-gray-300 rounded-2xl p-3">
              <Feather name="bell" size={24} color={colors.gray[200]} />
              {unreadNotif > 0 && (
                <View className="absolute w-6 h-6 -right-2 -top-2 items-center justify-center border border-gray-300 rounded-full bg-gray-800">
                  <Text className="text-green-500">2</Text>
                </View>
              )}
            </View>
          </View>

          {/* BODY */}
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-100 text-lg font-regular">
              Saldo disponivel
            </Text>
            <Text className="text-gray-100 text-4xl font-bold">
              {formatToCurrency(balance)}
            </Text>
          </View>

          {/* FOOTER */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center justify-center gap-2">
              <Icon_Dollar_Up color={colors.green[600]} />
              <View>
                <Text className="text-gray-200 text-md">Entradas</Text>
                <Text className="text-gray-100 text-2xl font-bold">
                  {formatToCurrency(balance)}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <Icon_Dollar_Down color={colors.red[300]} />
              <View>
                <Text className="text-gray-200 text-md">Saidas</Text>
                <Text className="text-gray-100 text-2xl font-bold">
                  {formatToCurrency(balance)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export { Header };
