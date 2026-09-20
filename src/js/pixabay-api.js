import axios from 'axios';

const API_KEY = '57660460-9b7a4de67f1bc51791b48e4e6';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
