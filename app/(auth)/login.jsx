import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import { Link, router, useRouter } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { ThemedView, ThemedText, ThemedButton, ThemedTextInput } from '../../components/Theme'
import  { Spacer }  from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import { View } from 'react-native-web'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  const { user, login } = useUser()

  const handleSubmit = async () => {
    setError(null)
    
    try {
      await login(email, password)
      console.log("success")
      router.replace( "/books" )
    } catch (error) {
      console.log("fail")
      setError(error.message)
    }
  }

  return (
    <ThemedView style={styles.container}>
      
      <Spacer />

      <ThemedTextInput 
      style={{ marginBottom: 20, width: "30%" }}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />

      <ThemedTextInput
        style={{ marginBottom: 20, width: "30%" }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Spacer />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer />

      { error && <ThemedText style={ styles.error }>
         { error } 
      </ThemedText> }

      <Spacer />
      <Link href="/register" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  }
})