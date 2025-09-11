import QaView from "@/components/practice/qa/QaView";
import type { ICourse } from "@/types/course.interface";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Qa = () => {
  const { course } = useLocalSearchParams();

  const data = JSON.parse(course as string) as ICourse;

  return (
    <SafeAreaView className="flex-1">
      <QaView data={data} />
    </SafeAreaView>
  );
};

export default Qa;
