import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEnum } from "@/types/storage.enum";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const setItemToStorage = async <T>(
  key: StorageEnum,
  data: T
): Promise<void | null> => {
  try {
    const parsedData = JSON.stringify(data);
    await AsyncStorage.setItem(key, parsedData);
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Ошибка записи",
      text2: "Попробуйте снова",
      position: "top",
    });
  }
};
