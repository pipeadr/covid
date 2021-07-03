import fetchData from './utils/fetchData.js';
//const fetchData = require('./utils/fetchData.js');
let API = 'https://api.quarantine.country/api/v1/summary/latest';

async function covid(url_api) {
    let id = 0;
    try {
      const data = await fetchData(url_api);
      console.log(`Total de Casos: ${data.data.regions.afghanistan.active_cases}`);
    //   const json = await fetchData();
    //   console.log(`Mi nombre es: ${id.name}`);
    } catch(err) {
      console.error(err);
    }
}



covid(API);