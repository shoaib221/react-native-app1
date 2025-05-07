import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { ThemedView, ThemedText, ThemedTextInput, ThemedButton } from '../../components/Theme'
import { Spacer } from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import { useRouter } from 'expo-router'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ error, setError ] = useState(null)
  const { user, register } = useUser()
  const router = useRouter()

  const handleSubmit = async () => {
    setError(null)

    try {
      await register(email, password)
      console.log('current user is: ', user)
      router.replace("/books")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    

      <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register an Account
        </ThemedText>

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

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/login" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Login instead
          </ThemedText>
        </Link>

      </ThemedView>


  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})


// appwrite -> userContext -> useUser -> login/register/logout