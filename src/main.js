import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const inputQuery = document.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

function scroll() {
  const galleryItem = document.querySelector('.gallery-item');

  const { height: cardHeight } = galleryItem.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = inputQuery.value.trim();

  if (query === '') {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: 'white',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
      });
      return;
    }

    createGallery(data.hits);

    if (currentPage * 15 < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: 'blue',
        messageColor: 'white',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: 'white',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);
    scroll();

    if (currentPage * 15 < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: 'yellow',
        messageColor: 'white',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: 'white',
    });
  } finally {
    hideLoader();
  }
});
