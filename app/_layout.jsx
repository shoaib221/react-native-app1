import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"


import { Colors } from "../constants/Colors"
import { UserProvider } from "../contexts/UserContext"
import { BooksProvider } from "../contexts/BooksContext"
import { ThemeProvider } from "../contexts/ThemeContext"


export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemeProvider>
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}>
          {/* Groups */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          {/* Individual Screens */}
          <Stack.Screen name="index" options={{ title: "Home" }} />

          {/* Book details screen */}
          {/* <Stack.Screen name="books/[id]" options={} */}
        </Stack>
      </BooksProvider>
    </UserProvider>
    </ThemeProvider>
  )
}

