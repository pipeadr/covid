//  const fetchData = (url_api) => {
//      return fetch(`${url_api}`)
//        .then(response => response.json())
//        .catch(function(error) {
//          console.log('Hubo un problema con la petición Fetch:' + error.message);
//        });
//       //  .catch(new Error('Algo Salio mal, intente más tarde'))
//     //   .then(post => console.log(post));
//  }

const fetchData = (url_api) => {
   return fetch(`${url_api}`)
     .then(function(response) {
      if(response.ok) {
         return response.json();
      }
     })
     .catch(function(error) {
       console.log('Hubo un problema con la petición Fetch:' + error.message);
       window.name_pais.textContent = "Algo Salio mal"
     });
    //  .catch(new Error('Algo Salio mal, intente más tarde'))
  //   .then(post => console.log(post));
}


export default fetchData;
//module.exports = fetchData;