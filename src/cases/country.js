import fetchData from '../utils/fetchData.js';

async function paises(url_api, country) {
    try {
        const data_country = await fetchData(url_api);
        // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
        //window.h.textContent = `${data_country}.regions.${country}.iso3166a3`;
          if(data_country.data.regions[country]) {
            
            // window.name_pais.textContent = data_country.data.regions[country].name
            window.name_pais.textContent = ""
            window.total_cases_country_t.textContent = "Total Cases:"
            window.total_cases_country.textContent = data_country.data.regions[country].total_cases

            window.active_cases_country_t.textContent = "Active Cases:"
            window.active_cases_country.textContent = data_country.data.regions[country].active_cases

            window.deaths_country_t.textContent = "Deaths:"
            window.deaths_country.textContent = data_country.data.regions[country].deaths

            window.recovered_country_t.textContent = "Recovered:"
            window.recovered_country.textContent = data_country.data.regions[country].recovered

            window.critical_country_t.textContent = "Critical:"
            window.critical_country.textContent = data_country.data.regions[country].critical

            window.tested_country_t.textContent = "Tested:"
            window.tested_country.textContent = data_country.data.regions[country].tested
          } else {
            if(country === "") {
              
              window.name_pais.textContent = "Debe escribir el nombre del país";
              window.total_cases_country_t.textContent = ""
              window.total_cases_country.textContent = ""
  
              window.active_cases_country.textContent = ""
              window.active_cases_country_t.textContent = ""
  
              window.deaths_country_t.textContent = ""
              window.deaths_country.textContent = ""
  
              window.recovered_country_t.textContent = ""
              window.recovered_country.textContent = ""
  
              window.critical_country_t.textContent = ""
              window.critical_country.textContent = ""
              
              window.tested_country_t.textContent = ""
              window.tested_country.textContent = "" 
            } else {
            window.name_pais.textContent = "Debe terminar de digitar el nombre del país o escribirlo bien";
            window.total_cases_country_t.textContent = ""
            window.total_cases_country.textContent = ""

            window.active_cases_country.textContent = ""
            window.active_cases_country_t.textContent = ""

            window.deaths_country_t.textContent = ""
            window.deaths_country.textContent = ""

            window.recovered_country_t.textContent = ""
            window.recovered_country.textContent = ""

            window.critical_country_t.textContent = ""
            window.critical_country.textContent = ""
            
            window.tested_country_t.textContent = ""
            window.tested_country.textContent = "" 
            }
            
          }
       } catch(err) {
        console.error(err);
      }
}

export default paises;