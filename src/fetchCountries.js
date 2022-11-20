const API_URL = 'https://restcountries.com/v3.1/name/';

export { fetchCountries };

const fieldRequest = ['name', 'capital', 'population', 'flags', 'languages'];
    
function fetchCountries(name) {
    return fetch(`
    ${API_URL}${name}?fields=${fieldRequest.join(',')}
    `)
        .then(response => {
            if (!response.ok) {
                throw new Error('');
            }
            return response.json();
        });
}