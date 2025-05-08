import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"

import { Colors } from "../../../constants/Colors"
import { ThemedView, ThemedText, ThemedLoader, ThemedButton, ThemedCard } from "../../../components/Theme"
import { useBooks } from "../../../hooks/useBooks"
import { Spacer } from "../../../components/Spacer"


const BookItem = ()=> {
    const { fetchBookById } = useBooks()
    const { id } = useLocalSearchParams()
    const [ book, setBook ] = useState(null)

    async function loadBook(){
        const bookData = await fetchBookById(id);
        setBook(bookData)
    }

    useEffect( () => {
        loadBook()
    },[id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
            <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>

            
        </ThemedView>
    )


}

export default BookItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "stretch",
    },
    title: {
      fontSize: 22,
      marginVertical: 10,
    },
    card: {
      margin: 20
    },
    delete: {
      marginTop: 40,
      backgroundColor: Colors.warning,
      width: 200,
      alignSelf: "center",
    },
  })