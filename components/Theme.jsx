
import { TextInput, Pressable, StyleSheet, useColorScheme, View, Text, Image } from 'react-native'
import { Colors } from '../constants/Colors';
import { useTheme } from '../hooks/useTheme';



export const ThemedCard = ({ style, ...props }) => { 
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]

  
  return ( 
    <View 
      style={[{ backgroundColor: theme.uiBackground}, styles.card, style]} 
      {...props} 
    /> 
  )
}

import logo from '../assets/favicon.png'

export const ThemedLogo = () => { 
  const { themeColor } = useTheme() 
  const theme = Colors[themeColor] 


  return ( 
    <Image source={logo} /> 
  ) 
} 

export const ThemedView = ( { style, ...props} ) => {
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]
  
  
    return (
      <View style={ [ theme, style ] }
        {...props}
      />
    )
}


export const ThemedText = ({ style,  ...props }) => {
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]


    return (
      <Text 
        style={ [ theme, style ] }
        {...props}
      />
    )
}

export const ThemedButton =({ style, ...props }) => {
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]


  return (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]} 
      {...props}
    />
  )
}


export function ThemedTextInput({ style, ...props }) {
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]


  return (
    <TextInput 
      style={[
        {
          backgroundColor: theme.uiBackground, 
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        }, 
        style
      ]}
      {...props}
    />
  )
}


import { ActivityIndicator } from 'react-native'


export const ThemedLoader = () => {
  const { themeColor } = useTheme()
  const theme = Colors[themeColor]


  return ( 
    <ThemedView style={{ 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" 
    }}> 
      <ActivityIndicator size="large" color={theme.text} /> 
    </ThemedView> 
  )
}


const styles = StyleSheet.create({
    card: {
      borderRadius: 5,
      padding: 20
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 4,
      borderRadius: 4,
      marginVertical: 4
    },
    pressed: {
      opacity: 0.5
    },
});