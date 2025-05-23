import { Stack, Tabs, useRouter } from "expo-router"
import { useColorScheme } from "react-native"
import { useEffect } from 'react'
import { Ionicons } from "@expo/vector-icons"
import { Button } from "react-native-web"
import { Slot } from 'expo-router'


import { Colors } from "../../constants/Colors" 
import { ThemedButton, ThemedText, ThemedLoader, ThemedView } from "../../components/Theme" 
import { useUser } from "../../hooks/useUser" 
import { useTheme } from "../../hooks/useTheme"
import { Spacer } from "../../components/Spacer" 


const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()
  
  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login")
    }
    console.log( "user only" )
  }, [user, authChecked])

  if( !authChecked ) return ( 
    <ThemedLoader /> 
  ) 

  return children;
  
} 


export default function DashboardLayout(  ) { 
  
  const { user, logout } = useUser() 
  const { themeColor, toggleTheme } = useTheme()
  const theme = Colors[themeColor]
  

  return (
    <>
      <ThemedButton onPress={logout} style={{ width: 120 }} >
        <ThemedText> Logout </ThemedText>
      </ThemedButton>

      <ThemedButton onPress={toggleTheme} style={{ width: 120 }} >
        <ThemedText> {themeColor} </ThemedText>
      </ThemedButton>
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: theme.navBackground, paddingTop: 10, height: 90 },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen 
          name="profile"
          options={{ title: "Profile", tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'person': 'person-outline'} 
              color={focused ? theme.iconColorFocused : theme.iconColor} 
            />
          )}}
        />
        <Tabs.Screen 
          name="books"
          options={{ title: "Books", tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'book': 'book-outline'} 
              color={focused ? theme.iconColorFocused : theme.iconColor} 
            />
          )}} 
        />
        <Tabs.Screen 
          name="create"
          options={{ title: "Create", tabBarIcon: ({ focused }) => (
            <Ionicons 
              size={24} 
              name={focused ? 'create': 'create-outline'} 
              color={focused ? theme.iconColorFocused : theme.iconColor} 
            />
          )}} 
        />
        <Tabs.Screen 
          name="book/[id]"
          options={{ href: null  }} 
        />

      </ Tabs>
    
    </>
  )
}