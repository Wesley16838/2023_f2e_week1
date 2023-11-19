import { Locale } from "@/constants/enum";
import { LocaleContextState } from "@/types/context";
import React, { createContext, useState, useContext } from "react";

const contextDefaultValues: LocaleContextState = {
    currentLocale: Locale.zhTW,
    addCurrentLocale: () => { },
};

export const LocaleContext = createContext<LocaleContextState>(
    contextDefaultValues
);

export function useLocaleContext() {
    return useContext(LocaleContext);
}

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentLocale, setLocale] = useState(contextDefaultValues.currentLocale);
    const addCurrentLocale = (newLocale: Locale) => {
        setLocale(newLocale)
    };
    return (
        <LocaleContext.Provider
            value={{
                currentLocale,
                addCurrentLocale
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleProvider;