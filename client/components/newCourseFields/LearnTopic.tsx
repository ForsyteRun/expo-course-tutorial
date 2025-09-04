import { generateFromGemini } from "@/config/AiModel";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import Button from "../Button";
import FormFields from "../field/Field";
import prompt from "./../../constants/prompt";
import TopicsList from "./TopicsList";
import { useGenerateContent } from "@/hooks/useGenerateContent";

const LearnTopic = () => {
  const { data: topics, isLoading, handleSelectData } = useGenerateContent();

  const { handleSubmit, control } = useForm<{ topic: string }>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<{ topic: string }> = async (data) => {
    const text = data.topic + prompt.IDEA;

    await handleSelectData(text);
  };

  return (
    <View className="w-full flex flex-col gap-4 my-4">
      <FormFields
        className="flex items-start justify-center h-32 ronded rounded-lg px-4 py-2"
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
        isLoading={isLoading}
        indicatorColor="#fff"
        onPress={handleSubmit(onSubmit)}
        className="w-full py-4 mt-4 ronded rounded-lg bg-PRIMARY"
        textClassName="text-WHITE text-[11px]"
      >
        Genetare Topics
      </Button>
      <TopicsList topics={topics} />
    </View>
  );
};

export default LearnTopic;
