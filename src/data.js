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
  if (response.status !== 200) {
    console.log('Error al cargar el url' + response.status)
    return;
  }
  response.json()
    .then(data => getData(data))
}).catch(err => console.log('Fetch error' + err))

// para async


const getData = (data) => {
  data = data.data
  // console.log(data)
  const array = [];
  let objData = {
    name: '',
    title: '',
    rol: '',
    rol2: '',
    image: ''
  }
  for (const key in data) {
    objData = {
      name: data[key].name,
      title: data[key].title,
      rol: data[key].tags[0],
      rol2: data[key].tags[1],
      image: data[key].splash
    }
    array.push(objData)
    printData(objData)
  }
  // console.log(array);
  return array;
}

const printData = (result) => {
  const print = document.getElementById('root');
  const paraModal = document.getElementById('para-modal');
  let name = result.name
  let title = result.title
  let rol = result.rol
  let rol2 = result.rol2
  let image = result.image
  let printCard = `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target">
    <div class="card">
      <img src="${image}" width="100%"; height="50%" class="card-img-top" alt="${name}" data-toggle="modal" data-target=".bd-example-modal-lg">
      <div class="card-body">
        <h4 class="card-title text-center">${name}</h4>
        <h5 class="card-text text-center">${title}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item tarjeta text-center card-text">${rol} 
        <p>${rol2}</p></li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Ver mas</a>
      </div>
    </div>
  </div> `;
  let miModal = ` <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
<img src="${image}" alt="" width="100%">
    <div class="modal-content tarjeta">
      <h4 class="text-center ">${name}</h4>
      <p class="text-center ">${rol}</p>
    </div>
  </div>
</div>`;
  print.insertAdjacentHTML('beforeend', printCard);
  paraModal.insertAdjacentHTML('beforeend', miModal)
  console.log(this)
}
$('#myModal').modal('toogle')
