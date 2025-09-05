import prompt from "@/constants/prompt";
import { useGenerateContent } from "@/hooks/useGenerateContent";
import { StorageEnum } from "@/types/storage.enum";
import { setItemToStorage } from "@/utils/setItemToStorage";
import cn from "classnames";
import { useRouter } from "expo-router";
import { FC, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Button from "../Button";

interface TopicsListProps {
  topics: string[];
}

const TopicsList: FC<TopicsListProps> = ({ topics }) => {
  const router = useRouter();

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const { data, isLoading, handleSelectData } = useGenerateContent();

  const handleSelectTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleGenerateCourses = async () => {
    const fullPrompt =
      "ключевые слова: " + selectedTopics.join(", ") + ". " + prompt.COURSES;

    await handleSelectData(fullPrompt);
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      const storeData = async () => {
        try {
          await setItemToStorage(StorageEnum.COURSES, data);

          router.push("/(tabs)/home");
        } catch (e) {
          Toast.show({
            type: "error",
            text1: "Ошибка сохранения курса",
            text2: "Попробуйте снова",
            position: "top",
          });
        }
      };

      storeData();
    }
  }, [data]);

  return (
    <View>
      <View className="flex flex-row flex-wrap gap-[5px]">
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic);

          return (
            <Pressable key={topic} onPress={() => handleSelectTopic(topic)}>
              <Text
                className={cn(
                  "text-[9px] border border-GRAY rounded-lg py-1 px-2",
                  { "bg-PRIMARY text-WHITE": isSelected }
                )}
              >
                {topic}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {selectedTopics.length ? (
        <Button
          className="w-full py-3 rounded-lg bg-PRIMARY mt-4"
          textClassName="text-WHITE"
          onPress={handleGenerateCourses}
          isLoading={isLoading}
          indicatorColor="#fff"
        >
          Submit
        </Button>
      ) : null}
    </View>
  );
};

export default TopicsList;
