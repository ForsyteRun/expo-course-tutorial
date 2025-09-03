import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../Button';

export default function NoCourse() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-6 px-5">
      <Image source={require("./../../assets/images/olivia-book-md.png")} className="w-full h-[200px]" resizeMode='contain' />
      <Text className='text-sm font-[Roboto-Black] self-left'>You Dont Have Any Course</Text>
      <Button onPress={() => router.push('/addCourse')} className="flex-row items-center justify-center w-full py-3 rounded-2xl bg-PRIMARY" textClassName='text-WHITE'>+ Create new one</Button>
      <Button className="flex-row items-center justify-center w-full py-3 rounded-2xl border border-PRIMARY" textClassName='text-sm text-PRIMARY'>Explore existing one</Button>
    </View>
  )
}