import Button from "@/components/Button";
import AuthButtons from "@/components/authFields/AuthButtons";
import LoginFields from "@/components/authFields/LoginFields";
import { ILoginFormData } from "@/types/auth.interface";
import { useRouter } from "expo-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from 'react-native';

const Login = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<ILoginFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    router.push('/(tabs)/home');
  }

  return (
    <View className="flex-1 items-center justify-start bg-WHITE py-10 gap-5">
      <Image source={require("./../../assets/images/auth.jpg")} className="w-[150px] h-[150px]" />
      <View className="w-9/12">
        <Text className="text-center text-black text-2xl font-medium">Welcome back</Text>
      </View>
      <LoginFields control={control} />
      <AuthButtons variant='login' />
      <Button onPress={handleSubmit(onSubmit)} className="w-9/12 py-4 ronded bg-PRIMARY" textClassName="text-WHITE">Submit</Button>
    </View >
  )
}

export default Login