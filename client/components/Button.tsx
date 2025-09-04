import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { IButton } from "./button.interaface";

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  textClassName,
  isLoading,
  indicatorColor,
  ...rest
}) => {
  return (
    <Pressable
      className={cn("rounded", className)}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <Text className={cn("text-center", textClassName)}>{children}</Text>
      )}
    </Pressable>
  );
};

export default Button;
