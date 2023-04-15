
const BASE_URL = 'https://restcountries.com/v2/name';

export const fetchCountries = async (searchQuery) => {
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}?fields=name,flags.svg,capital,population,languages`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};