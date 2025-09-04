import { generateFromGemini } from "@/config/AiModel";
import { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const useGenerateContent = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectData = async (text: string) => {
    setIsLoading(true);

    try {
      const { success, candidate, error } = await generateFromGemini(text);

      if (success && candidate) {
        let topicsArray: string[] = [];

        try {
          const clean = candidate.replace(/```json|```/g, "").trim();
          topicsArray = JSON.parse(clean);
        } catch (err) {
          Toast.show({
            type: "error",
            text1: "Ошибка парсинга",
            text2: "Попробуйте снова",
            position: "top",
          });
        }

        setData(topicsArray);
      } else {
        Toast.show({
          type: "error",
          text1: error,
          text2: "Попробуйте снова",
          position: "top",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, handleSelectData };
};
