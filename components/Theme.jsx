
import { TextInput, Pressable, StyleSheet, useColorScheme, View, Text, Image } from 'react-native'
import { Colors } from '../constants/Colors'


const styles = StyleSheet.create({
    card: {
      borderRadius: 5,
      padding: 20
    },
    btn: {
      backgroundColor: Colors.primary,
      padding: 18,
      borderRadius: 6,
      marginVertical: 10
    },
    pressed: {
      opacity: 0.5
    },
});

const colorScheme = 'light' ;
const theme = Colors[colorScheme];

export const ThemedCard = ({ style, ...props }) => { 
  
  return ( 
    <View 
      style={[{ backgroundColor: theme.uiBackground}, styles.card, style]} 
      {...props} 
    /> 
  )
}

import logo from '../assets/favicon.png'

export const ThemedLogo = () => {

  return (
    <Image source={logo} />
  )
}

export const ThemedView = ( { style, ...props} ) => {
    
    return (
      <View style={ style }
        {...props}
      />
    )
}


export const ThemedText = ({ style, title = false, ...props }) => {

    return (
      <Text 
        style={ [ theme, style ] }
        {...props}
      />
    )
}

export const ThemedButton =({ style, ...props }) => {

  return (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]} 
      {...props}
    />
  )
}


export function ThemedTextInput({ style, ...props }) {

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

