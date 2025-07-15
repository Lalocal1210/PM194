// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SectionList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { getBooksByCategory } from '../api/googleBooks';

const CATEGORIES = ['Fiction', 'History', 'Technology'];

export default function HomeScreen() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    setLoading(true);
    setError('');
    const data = await getBooksByCategory(selectedCategory);
    if (!data) {
      setError('Error de conexión');
      setBooks([]);
      setLoading(false);
      return;
    }

    const grouped = data.reduce((acc, book) => {
      const author = book.volumeInfo.authors?.[0] || 'Autor desconocido';
      if (!acc[author]) acc[author] = [];
      acc[author].push(book);
      return acc;
    }, {});

    const sections = Object.keys(grouped).map((author) => ({
      title: author,
      data: grouped[author],
    }));

    setBooks(sections);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.selectedCategory,
            ]}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <SectionList
          sections={books}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <ScrollView style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
              {item.volumeInfo.imageLinks?.thumbnail && (
                <Image
                  source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                  style={styles.bookImage}
                />
              )}
              <Text>{item.volumeInfo.publisher}</Text>
              <Text>{item.volumeInfo.description?.substring(0, 150)}...</Text>
            </ScrollView>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.authorHeader}>{title}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 10 },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  categoryButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  selectedCategory: { backgroundColor: '#2196F3' },
  categoryText: { color: '#000' },
  errorText: { color: 'red', marginTop: 20 },
  authorHeader: { fontWeight: 'bold', fontSize: 18, marginVertical: 10 },
  bookItem: { marginBottom: 10 },
  bookTitle: { fontSize: 16, fontWeight: 'bold' },
  bookImage: { width: 100, height: 150, marginVertical: 10 },
});
