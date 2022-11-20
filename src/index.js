import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import templateList from './templates/list-countries.hbs';
import templateBlock from './templates/block-country.hbs';

const DEBOUNCE_DELAY = 300;
const NOTIFY_TIMEOUT = 2000;


const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    block: document.querySelector('.country-info'),
}

refs.input.addEventListener(
    'input',
    debounce(findCountries, DEBOUNCE_DELAY)
);

function findCountries(ev) {
    const searchString = ev.target.value.trim();
    if (!searchString) {
        return
    }
    fetchCountries(searchString.trim())
        .then(responseAnalysis)
        .catch(markupZero);
}

function responseAnalysis(response) {
    if (response.length > 10) {
        markupMany();
        return;
    }
    if (response.length === 1) {
        markupOne(response[0]);
        return;
    }
    markupFew(response);
}
function markupZero() {
    markupClear();
    Notify.failure('Oops, there is no country with that name',
    {timeout: NOTIFY_TIMEOUT,});
}

function markupOne(country) {
    markupClear();
    const tmplCountryObj = {
        flags: country.flags,
        name: country.name,
        capital: country.capital,
        population: country.population,
        languages: Object.values(country.languages),
    };

    // refs.list.innerHTML = templateBlock({tmplCountryObj});
}

function markupFew(countries) {
    markupClear();
    
    // refs.list.innerHTML = templateList({ countries });
}

function markupMany() {
    markupClear();
    Notify.info(
        'Too many matches found. Please enter a more specific name.',
        { timeout: NOTIFY_TIMEOUT },
    );
}

function markupClear() {
    refs.list.innerHTML = '';
    refs.block.innerHTML = '';
}
