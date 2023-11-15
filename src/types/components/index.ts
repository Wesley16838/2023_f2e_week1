import { ButtonTheme } from "@/constants/enum";

export type ButtonProps = {
    onClick: VoidFunction,
    name: string,
    type: ButtonTheme,
}