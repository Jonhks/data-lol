// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
$('#myModal').modal('toogle')

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
  printModal(data)
  // console.log(data);
  return data;
}

const printData = (result) => {
  const print = document.getElementById('root');
  let name = result.name
  let title = result.title
  let rol = result.rol
  let rol2 = result.rol2
  let image = result.image
  let printCard = `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
    <div class="card champs">
      <img  id="${name}" src="${image}" width="100%"; height="40%" class="card-img-top" alt="${name}" data-toggle="modal" data-target=".bd-example-modal-xl">
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
  print.insertAdjacentHTML('beforeend', printCard);
  // console.log(name)
  return;
}


const printModal = (data) => {
  const champs = document.getElementsByClassName('champs');
  const paraModal = document.getElementById('para-modal');
  for (let i = 0; i < champs.length; i++) {
    champs[i].addEventListener('click', () => {
      let paData = event.target.id;
      console.log(paData)
      // console.log(data)
      for (key in data) {
        if (paData == key) {
          let dataModal = data[key]
          console.log(dataModal);
          let name = dataModal.name
          let title = dataModal.title
          let rol = dataModal.tags[0]
          let rol2 = dataModal.tags[1]
          let image = dataModal.splash
          let miModal = ` <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <img src="${image}" alt="${name}" width="100%;">
            </div>
          </div>`;
           paraModal.innerHTML = miModal
           printModal()
        }
      }
    })
  }
  // console.log(champs[0].id)
  // console.log(data)
}
