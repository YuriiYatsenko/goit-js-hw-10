
export const createCountryInfo = (country, container) => {
  try {
    const { name: { common }, capital, population, flags, languages } = country;
    const languagesList = Object.values(languages).map(language => language).join(',');

    const flagMarkup = flags?.svg ? `<img src="${flags.svg}" alt="Flag of ${common}" />` : '';

    const markup = `
      <h2>${common}</h2>
      <div class="country-details">
        <div class="country-flag">
          ${flagMarkup}
        </div>
        <div class="country-data">
          <p><span class="data-label">Capital:</span> ${capital}</p>
          <p><span class="data-label">Population:</span> ${population}</p>
          <p><span class="data-label">Languages:</span> ${languagesList}</p>
        </div>
      </div>
    `;

    container.innerHTML = markup;
  } catch (error) {
    console.log(error);
    container.innerHTML = '<p>Unable to display country information.</p>';
  }
};