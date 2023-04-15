import { fetchCountries } from './fetchCountries';
import { createCountryInfo, createCountryList } from './createCountryInfo';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const handleSearch = debounce(async () => {
  const searchQuery = searchBox.value.trim();

  if (!searchQuery) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  try {
    const data = await fetchCountries(searchQuery);

    if (data.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      return;
    }

    if (data.length === 1) {
      const [country] = data;
      createCountryInfo(country, countryInfo);
      countryList.innerHTML = '';
      return;
    }

    createCountryList(data, countryList);
    countryInfo.innerHTML = '';
  } catch (error) {
    Notify.failure('Oops, something went wrong. Please try again later!');
    console.log(error);
  }
}, DEBOUNCE_DELAY);

searchBox.addEventListener('input', handleSearch);

