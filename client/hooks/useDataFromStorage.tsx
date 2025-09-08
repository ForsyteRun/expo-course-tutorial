import type { ICourse } from "@/types/course.interface";
import { StorageEnum } from "@/types/storage.enum";
import { getItemFromStorage } from "@/utils/getItemFormStorage";
import { useLayoutEffect, useState } from "react";

export const useDataFromStorage = () => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getDataFromStorage = async () => {
    try {
      setLoading(true);
      const data = await getItemFromStorage<ICourse[]>(StorageEnum.COURSES);
      setCourses(data);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    getDataFromStorage();
  }, []);

  return { courses, loading, getDataFromStorage };
};
