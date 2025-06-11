import { Slot } from "expo-router"
import { DarkTheme, ThemeProvider } from "@react-navigation/native"

const myTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#fff',
    }
}

export default function RootLayout() {
    return (
        <ThemeProvider value={myTheme}>
            <Slot />
        </ThemeProvider>
    )
}