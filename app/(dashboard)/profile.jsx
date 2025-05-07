import { StyleSheet } from 'react-native'
import {Spacer} from "../../components/Spacer"
import { ThemedText, ThemedView } from "../../components/Theme"
import { useUser } from '../../hooks/useUser'

const Profile = () => {
  const { user } = useUser()

  return (
    <ThemedView style={styles.container}>

      { user && <ThemedText title={true} style={styles.heading}>
        { user.email }
      </ThemedText> }
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />

    </ThemedView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})