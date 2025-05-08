import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'


import {Spacer} from "../../components/Spacer"
import { ThemedText, ThemedView, ThemedTextInput, ThemedButton } from "../../components/Theme"
import { useBooks } from "../../hooks/useBooks"

const Create = () => {
  const { createBook } = useBooks()
  const router = useRouter()

  const [ title, setTitle ] = useState("")
  const [ author, setAuthor ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ loading, setLoading ] = useState(false)

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return
    setLoading(true)
    await createBook( { title, author, description } )
    setTitle("")
    setAuthor("")
    setDescription("")
    setLoading(false)
  }

  const isLoading = () => {

  }

  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />

      <ThemedTextInput
        style={styles.input}
        placeholder="Book Title"
        value={title}
        onChangeText={setTitle}
      />
      <Spacer />

      <ThemedTextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <Spacer />

      <ThemedTextInput
        style={styles.multiline}
        placeholder="Book Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
      <Spacer />

      
        
      {loading ? 
      <ThemedText style={{ color: '#fff' }}> "Saving..."</ThemedText> : 
      <ThemedButton onPress={handleSubmit} > 
        <ThemedText> Add Book </ThemedText> 
      </ThemedButton>
      }
        
      

    </ThemedView>
  )
}

export default Create

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