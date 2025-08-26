import FormFields from "@/components/field/Field";
import { IRegisterFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { View } from "react-native";
import { validEmail } from "./email.regex";

interface IFieldProps {
  control: Control<IRegisterFormData>
}

const RegisterFields: FC<IFieldProps> = ({ control }) => {
  return (
    <View className="w-9/12 flex flex-col gap-8 my-4" >
      <FormFields<IRegisterFormData>
        control={control}
        name="name"
        placeholder="enter name"
        rules={{
          required: 'name is required',
          minLength: { value: 3, message: 'at least 3 characters' }
        }}
      />
      <FormFields<IRegisterFormData>
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
      <FormFields<IRegisterFormData>
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

export default RegisterFields