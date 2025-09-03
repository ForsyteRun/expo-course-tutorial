import LearnTopic from '@/components/newCourseFields/LearnTopic'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AddCourse() {
  return (
    <SafeAreaView className='flex-1 px-5 py-10 bg-BG_GRAY'>
      <Text className='text-xl font-[Roboto-Black] mb-4'>Create New Course</Text>
      <Text className='text-sm font-[Roboto-Regular] mb-4'>What do you want to learn today?</Text>
      <Text className='text-[10px] mb-4 text-GRAY'>Write what courses you want to create(Ex. Learn React JS, Learn React Native, Digital Marketing Guide, 10th Science Chapter)</Text>
      <LearnTopic />
    </SafeAreaView>
  )
}