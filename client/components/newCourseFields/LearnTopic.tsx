import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import Button from "../Button";
import FormFields from "../field/Field";
import prompt from "./../../constants/prompt";
import { generateContentFromGemini } from "@/config/AiModel";

export default function LearnTopic() {
  const [topics, setTopics] = useState<string[]>();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<{ topic: string }>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{ topic: string }> = async (data) => {
    const text = data.topic + prompt.IDEA;
    await generateContentFromGemini(text);
  };

  return (
    <View className="w-full flex flex-col gap-8 my-4">
      <FormFields
        className="flex items-start justify-center h-32 ronded rounded-lg px-2"
        numberOfLines={3}
        multiline
        control={control}
        name="topic"
        placeholder="(Ex. Learn Pyton)"
        rules={{
          required: "topic is required",
          minLength: { value: 3, message: "at least 3 characters" },
        }}
      />
      <Button
        isLoading={isSubmitting}
        indicatorColor="#fff"
        onPress={handleSubmit(onSubmit)}
        className="w-full py-2 ronded rounded-lg bg-PRIMARY"
        textClassName="text-WHITE"
      >
        Submit
      </Button>
    </View>
  );
}
