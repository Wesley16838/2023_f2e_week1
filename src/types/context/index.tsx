import { Locale } from "@/constants/enum";

export type LocaleContextState = {
    currentLocale: Locale,
    addCurrentLocale: (value: Locale) => void,
}
