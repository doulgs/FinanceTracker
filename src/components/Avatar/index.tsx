import { colors } from "@/styles";
import { useUser } from "@clerk/clerk-expo";
import { Image, View } from "react-native";

function Avatar({ selected }: AvatarProps) {
  const { user } = useUser();

  if (!user?.imageUrl) {
    return null;
  }

  return (
    <View
      style={{
        borderWidth: selected ? 1 : 0,
        borderColor: colors.green[600],
        borderRadius: 16,
      }}
    >
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 24, height: 24, borderRadius: 16 }}
      />
    </View>
  );
}

export { Avatar };
