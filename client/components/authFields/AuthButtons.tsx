import { Link } from 'expo-router'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

interface IAuthButtonsProps {
  variant: 'login' | 'register'
}

const AuthButtons: FC<IAuthButtonsProps> = ({ variant }) => {
  const redirect = variant === 'login' ? 'register' : 'login'
  return (
    <Link href={`/auth/${redirect}`}>
      <View className="flex-row items-center justify-center gap-1 w-full">
        <Text className='text-[12px]'>{variant ? "Already have an account?" : "Don't have an account?"}</Text>
        <Text className="text-[12px] text-green-700 font-medium">{redirect}</Text>
      </View>
    </Link>
  )
}

export default AuthButtons