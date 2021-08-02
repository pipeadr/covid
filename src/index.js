import API from '../config/variables.js';
import fetchData from './utils/fetchData.js';
import casos from './cases/cases.js';
import country from './cases/country.js';
import '../css/style.css';

async function covid(url_api) {
    try {
      const data = await fetchData(url_api);
      console.log(`Total de Casos: ${data.data.regions.afghanistan.active_cases}`);
    } catch(err) {
      console.error(err);
    }
}
//covid(API);
casos(API);

window.search.addEventListener('change', () => {
  let h = window.search.value;
  country(API, h);
})
