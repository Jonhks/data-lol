// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

// fetch('./data/lol/lol.json')
// .then(function(response){
//   // response => response.json()
//   console.log(response)
//   return response.json()
// })
// const url = './data/lol/lol.json'

// -----------Funciona

// const dataLol = url => fetch(url).then(response => response.json()) ;
  
// Promise.all(
//   [
//     dataLol('./data/lol/lol.json')
//   ]
// ).then( result => {
//   prueba(result[0])
// })

// const prueba = (result) => {
//   console.log(result)
// } 

// --------------- hasta aquí


// fetch('./data/lol/lol.json')
//   .then(function (response){
//     if (response.status !== 200) {
//       console.log('Looks like there was a problem. Status Code: ' + response.status);
//       return;
//   }
//   response.json()
//   .then(function(data){
//     dataLol(data)
//   })
// }
// )
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
// });

// const dataLol = (data) => {
//   console.log(data)
// }

const url = './data/lol/lol.json'
fetch(url).then(response => {
  if(response.status !== 200){
    console.log('Error al cargar el url' + response.status)
    return;
  }
  response.json().then(data => console.log(data))
}).catch(err => console.log('Fetch error' + err))