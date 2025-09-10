import type { ICourse, ISelectedQuizOptions } from "@/types/course.interface";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import Button from "../../Button";
import cn from "classnames";
import { compliteQuiz } from "@/utils/compliteQuiz";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useRouter } from "expo-router";

interface IQuizContentProps {
  data: ICourse;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const QuizContent: FC<IQuizContentProps> = ({ data, index, setIndex }) => {
  const router = useRouter();

  const [selected, setSelected] = useState<number | null>(null);
  const [totalSelectedQuiz, setTotalSelectedQuiz] = useState<
    ISelectedQuizOptions[]
  >([]);

  const screenHeight = Dimensions.get("window").height;
  const isLastQuiz = index === data.quiz.length - 1;
  const currectQuiz = data.quiz[index];

  const handlePressOption = (index: number) => {
    setSelected(index);
  };

  const handleNextQuiz = () => {
    setIndex((prev) => prev + 1);
    setSelected(null);
    setTotalSelectedQuiz((prev) => [
      ...prev,
      {
        selected: selected?.toString() || "",
        "corect-answer": currectQuiz["corect-answer"],
        question: currectQuiz.question,
        isCorrect:
          currectQuiz.options[selected ?? 0] === currectQuiz["corect-answer"],
        options: data.quiz[index].options,
      },
    ]);
  };

  const handleFinishQuiz = async () => {
    if (totalSelectedQuiz.length === data.quiz.length - 1) {
      const updated = [
        ...totalSelectedQuiz,
        {
          selected: selected?.toString() || "",
          "corect-answer": currectQuiz["corect-answer"],
          question: currectQuiz.question,
          isCorrect:
            currectQuiz.options[selected ?? 0] === currectQuiz["corect-answer"],
          options: data.quiz[index].options,
        },
      ];

      const result = await compliteQuiz(data.id, updated);

      setTotalSelectedQuiz(updated);

      if (result) {
        router.push({
          pathname: "/practice/quiz/summery",
          params: { result: JSON.stringify(updated) },
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Ошибка сохранения quiz",
          text2: "Попробуйте снова",
          position: "top",
        });
      }
    } else {
      router.push({
        pathname: "/practice/quiz/summery",
        params: { result: JSON.stringify(totalSelectedQuiz) },
      });
    }
  };

  return (
    <View className="h-full px-4">
      <View
        className="flex justify-center gap-4 bg-WHITE mt-5 rounded-2xl p-4"
        style={{
          height: screenHeight * 0.75,
          elevation: 10,
        }}
      >
        <Text className="text-3xl text-center font-[Roboto-Black]">
          {data.quiz[index].question}
        </Text>
        <FlatList
          data={data.quiz[index].options}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                onPress={() => handlePressOption(index)}
                className={cn("border border-GRAY rounded-lg p-4 m-4", {
                  "bg-LIGHT_GREEN border-GREEN": selected === index,
                })}
              >
                <Text className="text-xl text-left">{item}</Text>
              </Pressable>
            );
          }}
        />
      </View>
      {selected?.toString() &&
        (isLastQuiz ? (
          <Button
            onPress={handleFinishQuiz}
            className="w-full py-3 rounded-2xl bg-PRIMARY mt-5"
            textClassName="text-WHITE"
          >
            Finish
          </Button>
        ) : (
          <Button
            onPress={handleNextQuiz}
            className="w-full py-3 rounded-2xl bg-PRIMARY mt-5"
            textClassName="text-WHITE"
          >
            Next
          </Button>
        ))}
    </View>
  );
};

export default QuizContent;
