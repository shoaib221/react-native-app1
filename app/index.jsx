import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'expo-router'
import { ThemedView, ThemedText, ThemedLogo, ThemedCard } from "../components/Theme"
import { Spacer } from '../components/Spacer'


const Home = () => {
  return (
    
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Shelfie
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

    </ThemedView>

  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})

// npm run web
// port 8081