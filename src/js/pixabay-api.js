import axios from 'axios';

export const getData = async (searchQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '43212506-95870309335e8ebf3ea9c8656',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  };
  const response = await axios.get('https://pixabay.com/api', axiosOptions);

  return response;
};
