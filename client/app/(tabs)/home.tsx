import Header from '@/components/Home/Header';
import NoCourse from '@/components/Home/NoCourse';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-WHITE'>
      <Header />
      <NoCourse />
    </SafeAreaView>
  )
}