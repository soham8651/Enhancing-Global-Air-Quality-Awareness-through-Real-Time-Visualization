// src/translate.js
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(URL, {
      q: text,
      target: targetLanguage,
      key: API_KEY,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
