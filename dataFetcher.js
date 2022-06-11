const BOOKS_URL = "https://ebooksbackend.herokuapp.com/get";
const IMAGES_URL = "https://ebooksbackend.herokuapp.com/getImages";
export const fetchBooksData = async () => {
  const response = await fetch(BOOKS_URL);
  const data = await response.json();
  return data;
};

export const fetchImagesData = async () => {
  const response = await fetch(IMAGES_URL);
  const data = await response.json();
  return data;
};
