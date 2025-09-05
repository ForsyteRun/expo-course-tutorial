import { StorageEnum } from "@/types/storage.enum";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const getItemFromStorage = async <T>(
  key: StorageEnum
): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (!data) return null;

    try {
      return JSON.parse(data) as T;
    } catch (parseErr) {
      Toast.show({
        type: "error",
        text1: "Ошибка данных",
        text2: "Формат сохранённых данных повреждён",
        position: "top",
      });

      return null;
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Ошибка чтения",
      text2: "Попробуйте снова",
      position: "top",
    });

    return null;
  }
};
