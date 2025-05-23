

import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";


export const BooksContext = createContext();


export function BooksProvider({children}) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();


  async function createBook(data) {
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      console.log('Success:', result);
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    
    }
  }

const fetchBooks = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  };

  async function fetchBookById(id) {
    
  }

  async function deleteBook(id) {
    
  }

  useEffect(() => {
    fetchBooks();
  }, [] );


  return (
    <BooksContext.Provider value={{ books,  createBook, fetchBooks, fetchBookById, deleteBook }} >
      {children}
    </BooksContext.Provider>
  )
}

/*

// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello from React Native!' }),
      });
      const json = await response.json();
      console.log('Response from POST request:', json);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {data && <Text>{data.message}</Text>}
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Post Data" onPress={postData} />
    </View>
  );
};

export default App;

const fetchBooks = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  };

*/



