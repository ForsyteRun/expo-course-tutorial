import Button from "@/components/Button";
import AuthButtons from "@/components/authFields/AuthButtons";
import RegisterFields from "@/components/authFields/RegisterFields";
import { IRegisterFormData } from "@/types/auth.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from 'react-native';

const Register = () => {
  const { handleSubmit, control } = useForm<IRegisterFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    console.log(data);
  }

  return (
    <View className="flex-1 items-center justify-start bg-WHITE py-10 gap-5">
      <Image source={require("./../../assets/images/auth.jpg")} className="w-[150px] h-[150px]" />
      <View className="w-9/12">
        <Text className="text-center text-black text-xl font-medium">Register</Text>
      </View>
      <RegisterFields control={control} />
      <AuthButtons variant='register' />
      <Button onPress={handleSubmit(onSubmit)} className="w-9/12 py-4 ronded bg-PRIMARY" textClassName="text-WHITE">Submit</Button>
    </View >
  )
}

export default Register