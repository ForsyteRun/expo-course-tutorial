import type { ICourse } from "@/types/course.interface";
import { StorageEnum } from "@/types/storage.enum";
import { getItemFromStorage } from "@/utils/getItemFormStorage";
import { useEffect, useState } from "react";

export const useDataFromStorage = () => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getItemFromStorage<ICourse[]>(StorageEnum.COURSES);

      setCourses(data);
    };

    getDataFromStorage();
  }, []);

  return { courses };
};
