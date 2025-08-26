import FormFields from "@/components/field/Field";
import { ILoginFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { View } from "react-native";
import { validEmail } from "./email.regex";

interface IFieldProps {
  control: Control<ILoginFormData>
}

const LoginFields: FC<IFieldProps> = ({ control }) => {
  return (
    <View className="w-9/12 flex flex-col gap-8 my-4" >
      <FormFields<ILoginFormData>
        control={control}
        name="email"
        placeholder="enter email"
        keyboardType='email-address'
        rules={{
          required: 'email is required',
          pattern: {
            value: validEmail,
            message: 'invalid email address'
          }
        }}
      />
      <FormFields<ILoginFormData>
        control={control}
        name="password"
        placeholder="enter password"
        secureTextEntry
        rules={{
          required: 'password is required',
          minLength: { value: 6, message: 'at least 6 characters' }
        }}
      />
    </View>
  )
}

export default LoginFields