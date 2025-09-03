import { PressableProps } from "react-native";

export interface IButton extends PressableProps {
  className?: string;
  textClassName?: string
  isLoading?: boolean
  indicatorColor?: string
}