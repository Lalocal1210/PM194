import axios from 'axios';

export const getBooksByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`
    );
    return response.data.items || [];
  } catch (error) {
    console.error("Error al obtener libros:", error.message);
    return null;
  }
};
