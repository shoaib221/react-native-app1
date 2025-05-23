import { StyleSheet, FlatList, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

import { Spacer } from "../../components/Spacer"
import { ThemedText, ThemedView, ThemedCard } from "../../components/Theme"
import { useBooks } from '../../hooks/useBooks'



const Books =  () => {

  const { books, fetchBooks } = useBooks()
  const router = useRouter()

  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>

      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/book/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />


    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})