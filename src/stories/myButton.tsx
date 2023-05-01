import { Button, PressEvent } from "@nextui-org/react";

type NormalColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "gradient";

type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl";

interface MyButtonProps {
  color?: NormalColors;
  size?: NormalSizes;
  label?: string;
  onPress?: (e: PressEvent) => void;
}

export const MyButton = ({
  color = "primary",
  size = "md",
  onPress,
  label,
  ...props
}: MyButtonProps) => {
  return <Button {...props}>{label}</Button>;
};
