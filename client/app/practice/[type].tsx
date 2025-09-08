import PracticeView from "@/components/practice/PracticeView";
import { PRACTICE_OPTIONS } from "@/constants/images";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Practice = () => {
  const { type } = useLocalSearchParams();

  const option = PRACTICE_OPTIONS.find((item) => item.name === type);

  if (!option) return;

  return (
    <SafeAreaView>
      <PracticeView option={option} />
    </SafeAreaView>
  );
};

export default Practice;
