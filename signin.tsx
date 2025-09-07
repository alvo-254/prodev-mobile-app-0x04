import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants/index";

const SignIn = () => {
  const router = useRouter();

  return (
    <View className="flex-1 p-5">
      <View className="flex-row justify-between items-center mt-5">
        <MaterialIcons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
        <Text className="text-lg font-semibold">Sign In</Text>
        <View />
      </View>
      <View className="mt-5">
        <Text className="text-4xl font-bold">Welcome Back</Text>
        <Text className="text-sm text-gray-500 mt-2">Sign in to CoinPay</Text>
      </View>
      <View className="mt-10 gap-3">
        <View>
          <Text className="text-lg text-gray-600 mb-2">Email</Text>
          <TextInput className="border border-gray-300 rounded-lg p-3" placeholder="Enter email" />
        </View>
        <View>
          <Text className="text-lg text-gray-600 mb-2">Password</Text>
          <View className="border border-gray-300 rounded-lg p-3 flex-row items-center">
            <TextInput className="flex-1" placeholder="Enter password" secureTextEntry />
            <MaterialIcons name="visibility-off" size={24} color="gray" />
          </View>
        </View>
        <Text className="text-right text-[#34967C] mt-2">Forgot Password?</Text>
        <Pressable className="bg-[#34967C] py-4 rounded-lg items-center mt-6">
          <Text className="text-white text-lg font-medium">Sign In</Text>
        </Pressable>
      </View>
      <View className="flex-row items-center my-6">
        <View className="flex-1 border-t border-gray-300" />
        <Text className="mx-2 text-gray-500">OR</Text>
        <View className="flex-1 border-t border-gray-300" />
      </View>
      <View className="gap-3">
        <Pressable className="border border-gray-300 py-4 rounded-lg flex-row items-center justify-center gap-2">
          <Image source={GOOGLELOGO} className="w-6 h-6" />
          <Text className="text-lg">Sign in with Google</Text>
        </Pressable>
        <Pressable className="border border-gray-300 py-4 rounded-lg flex-row items-center justify-center gap-2">
          <Image source={FACEBOOKLOGO} className="w-6 h-6" />
          <Text className="text-lg">Sign in with Facebook</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-center absolute bottom-8 left-0 right-0">
        <Text className="text-lg">Don't have an account? </Text>
        <Text className="text-lg font-semibold text-[#FFA800]" onPress={() => router.push("/join")}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
