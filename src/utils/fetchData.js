 const fetchData = (url_api) => {
     // return new Promise((resolve, reject) => {})
     return fetch(`${url_api}`)
    //  .then(response => console.log(response.json()))
       .then(response => response.json())
    //   .then(post => console.log(post));
 }

export default fetchData;
//module.exports = fetchData;