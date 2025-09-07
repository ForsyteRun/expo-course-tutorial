import Button from "@/components/Button";
import type { IChapter } from "@/types/course.interface";
import { compliteChapter } from "@/utils/compiteChapter";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Chapter = () => {
  const screenWidth = Dimensions.get("window").width;

  const router = useRouter();
  const params = useLocalSearchParams();

  const [curentPage, setCurentPage] = useState(0);

  const chapter = JSON.parse(params.chapter as string) as IChapter;
  const chapterId = params.chapterId as string;
  const courseId = params.courseId as string;

  const getProgress = (curentPage: number) => {
    return curentPage / chapter.content.length;
  };

  const handleCompiteChapter = async () => {
    const result = await compliteChapter(courseId, chapterId);

    if (result) {
      router.replace({
        pathname: "/courses/[id]",
        params: { id: courseId },
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Ошибка сохранения раздела",
        text2: "Попробуйте снова",
        position: "top",
      });
    }
  };

  const singleChapter = chapter.content[curentPage];
  const isLastPage = chapter.content.length - 1 === curentPage;

  return (
    <SafeAreaView className="flex-1 items-center justify-between relative px-3 py-2 ">
      <View className="flex items-center justify-center gap-5">
        <Progress.Bar
          progress={getProgress(curentPage)}
          width={screenWidth * 0.85}
          className="mt-5"
        />
        <Text className="text-xl font-[Roboto-Black]">
          {singleChapter?.topic}
        </Text>
        <Text className="text-sm">{singleChapter?.explain}</Text>
        {singleChapter?.code && (
          <View className="bg-[#000000] rounded-lg px-2 py-4">
            <Text className="text-sm text-WHITE">{singleChapter?.code}</Text>
          </View>
        )}
      </View>

      {isLastPage ? (
        <Button
          onPress={handleCompiteChapter}
          className="w-full py-2 rounded bg-PRIMARY"
          textClassName="text-WHITE"
        >
          Finish
        </Button>
      ) : (
        <Button
          onPress={() => setCurentPage(curentPage + 1)}
          className="w-full py-2 rounded bg-PRIMARY"
          textClassName="text-WHITE"
        >
          Next page
        </Button>
      )}
    </SafeAreaView>
  );
};

export default Chapter;
