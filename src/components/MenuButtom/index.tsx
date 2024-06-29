import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

function MenuButtom({
  title,
  children,
  ...rest
}: MenuButtomProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View className=" items-center justify-center">
        <View className="flex items-center justify-center p-6 rounded-3xl bg-gray-700">
          {children}
        </View>
        <Text className="mt-4 text-lg text-gray-100">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export { MenuButtom };
