const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = async (searchQuery) => {
  if (typeof searchQuery !== 'string' || searchQuery.length === 0) {
    throw new Error('Invalid search query');
  }

  const encodedSearchQuery = encodeURIComponent(searchQuery);

  try {
    const response = await fetch(`${BASE_URL}/${encodedSearchQuery}?fields=name,flags,capital,population,languages`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
