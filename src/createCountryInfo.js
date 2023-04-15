
export const createCountryInfo = (country, container) => {
  const { name: { common }, capital, population, flags, languages } = country;
  const languagesList = Object.values(languages).join(', ');

  const flagMarkup = flags && flags.svg ? `<img src="${flags.svg}" alt="Flag of ${common}" />` : '';

  const markup = `
    <h2>${common}</h2>
    <div class="country-details">
      <div class="country-flag">${flagMarkup}</div>
      <div class="country-data">
        <p><span class="data-label">Capital:</span> ${capital}</p>
        <p><span class="data-label">Population:</span> ${population}</p>
        <p><span class="data-label">Languages:</span> ${languagesList}</p>
      </div>
    </div>
  `;

  container.innerHTML = markup;
};

export const createCountryList = (countries, container) => {
  const markup = countries.map(({ name }) => `<li>${name.common}</li>`).join('');

  container.innerHTML = `<ul>${markup}</ul>`;
};