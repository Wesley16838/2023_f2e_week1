import { ButtonTheme } from "@/constants/enum";
import { EventProp } from "../global";

export type ButtonProps = {
    onClick: VoidFunction,
    name: string,
    type: ButtonTheme,
    buttonType?: "button" | "submit" | "reset" | undefined;
}

export type NavProps = {
    data: any
}

export type NavOptionsProp = {
    name: string,
    routeName: string,
}

export type ListProp = {
    title?: string,
    data: EventProp[],
    isFullType: boolean,
}

export type FooterProps = {
    data: any
}
