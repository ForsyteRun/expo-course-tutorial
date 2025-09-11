import FlashcardsView from "@/components/practice/flashcards/FlashcardsView";
import type { ICourse } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Flashcards = () => {
  const { course } = useLocalSearchParams();

  const data = JSON.parse(course as string) as ICourse;

  return (
    <SafeAreaView>
      <FlashcardsView data={data} />
    </SafeAreaView>
  );
};

export default Flashcards;
