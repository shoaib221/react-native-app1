import { Stack, Tabs, useRouter } from "expo-router"
import { StatusBar } from "react-native"
import { useEffect } from 'react'

import { useUser } from '../../hooks/useUser'
import { ThemedLoader } from '../../components/Theme'


export default function AuthLayout() {
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </ GuestOnly >
  )
}



const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()
  
  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile")
    }
    console.log( "guest only" )
  }, [user, authChecked])

  if( !authChecked ) return (
    <ThemedLoader />
  )
  
  return children ;

}

