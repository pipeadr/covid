import fetchData from '../utils/fetchData.js';
async function casos(url_api) {
   try {
    const data_case = await fetchData(url_api);
    // const total_cases = data_case.data.summary.total_cases;
    window.total_cases.textContent = data_case.data.summary.total_cases;
    window.active_cases.textContent = data_case.data.summary.active_cases;
    window.total_deaths.textContent = data_case.data.summary.deaths;
    window.recovered.textContent = data_case.data.summary.recovered;
   } catch(err) {
    console.error(err);
  }
}

export default casos;