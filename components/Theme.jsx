import { StyleSheet, useColorScheme, View, Text, Image } from 'react-native'
import { Colors } from '../constants/Colors'


const styles = StyleSheet.create({
    card: {
      borderRadius: 5,
      padding: 20
    }
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


export const ThemedLogo = () => {

  return (
    <Image source={logo} />
  )
}

export const ThemedView = ( { style, ...props} ) => {
    
    return (
      <View 
        {...props}
      />
    )
}


export const ThemedText = ({ style, title = false, ...props }) => {

    return (
      <Text 
        style={ theme }
        {...props}
      />
    )
}

