import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Touchable = TouchableOpacityProps & {
  title: string;
  isloading?: boolean;
};

export function Button({ title, isloading = false, ...rest }: Touchable) {
  return (
    <TouchableOpacity
      disabled={isloading}
      activeOpacity={0.7}
      className="w-full h-14 item-center justify-center rounded-lg bg-gray-800"
      {...rest}
    >
      {isloading ? (
        <ActivityIndicator className="text-white" />
      ) : (
        <Text className="text-blue-500 text-center font-bold uppercase text-xl">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
