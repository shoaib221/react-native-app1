import { ThemedView, ThemedText } from "../components/Theme";
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native'

const About = () => {

    return(
        <ThemedView>
            <Link href="/" style={styles.link}>
                <ThemedText> Home Page</ThemedText>
            </Link>

            <Link href="/contact" style={styles.link}>
                <ThemedText>Contact Page</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default About;

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