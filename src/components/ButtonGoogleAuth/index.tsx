import { Icon_Google } from "@/assets/icons/google";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type Touchable = TouchableOpacityProps & {
  isloading?: boolean;
};

export function ButtonGoogleAuth({ isloading = false, ...rest }: Touchable) {
  return (
    <TouchableOpacity
      disabled={isloading}
      activeOpacity={0.7}
      className="w-80 h-14 item-center justify-center rounded-lg bg-gray-800 border"
      {...rest}
    >
      <View className="flex-1 flex-row items-center justify-center">
        <View className="w-16 h-full items-center justify-center border-r border-r-black">
          <Icon_Google />
        </View>
        <View className="flex-1">
          {isloading ? (
            <ActivityIndicator className="text-white" />
          ) : (
            <Text className="text-gray-100  text-center font-medium uppercase text-md">
              Entrar com o Google
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
