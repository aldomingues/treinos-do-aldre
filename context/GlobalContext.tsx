import { createContext, useEffect, useState } from 'react'
import { Theme, DarkTheme } from 'styles/theme'
import { ThemeProps } from 'styles/theme'

export const GlobalContext = createContext({} as {
    setMode: (mode: "light" | "dark") => void,
    mode: string,
    theme: ThemeProps
})

export function GlobalProvider({ children }: any) {
    const [mode, setMode] = useState<"light"|"dark">("light");
    const [theme, setTheme] = useState<ThemeProps>(Theme);

    useEffect(() => {
        setTheme(mode == "light" ? Theme : DarkTheme)
    }, [mode])

    return (
        <GlobalContext.Provider value={{mode, setMode, theme}}>
            {children}
        </GlobalContext.Provider>
    )
}
