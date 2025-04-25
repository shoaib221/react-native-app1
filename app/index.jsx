import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'expo-router'
import { ThemedView, ThemedText, ThemedLogo, ThemedCard } from "../components/Theme"


const Home = () => {
  return (
    
    <ThemedView>
      <ThemedText> Hello </ThemedText>

      <Link href="/about" style={ styles.link } > 
        <ThemedText> About </ThemedText>
      </Link>

      <Link href="/contact" style={ styles.link } >
        <ThemedText> Contact </ThemedText>
      </Link>
    </ThemedView>

  )
}

export default Home

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