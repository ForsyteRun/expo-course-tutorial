import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interaface'

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, textClassName, ...rest }) => {
  return (
    <Pressable className={cn('rounded', className)} {...rest}>
      <Text className={cn('text-center', textClassName)}>{children}</Text>
    </Pressable>
  )
}

export default Button