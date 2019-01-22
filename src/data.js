const proccesData = (data) => {
  const array = [];
  for (const key in data) {
    array.push({
      name: data[key].name,
      title: data[key].title,
      rol: data[key].tags[0],
      rol2: data[key].tags[1],
      image: data[key].splash,
      logo: data[key].img
    })
  }
  localStorage.setItem("newData", JSON.stringify(array));
  return array;
}

// const printData = (result) => {
//   const print = document.getElementById('root');
//   let name = result.name
//   let title = result.title
//   let rol = result.rol
//   let rol2 = result.rol2
//   let image = result.image
//   let logo = result.logo
//   let printCard = `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
//     <div class="card champs">
//       <img  id="${name}" src="${image}" width="100%"; height="40%" class="card-img-top" alt="${name}" data-toggle="modal" data-target=".bd-example-modal-xl">
//       <div class="card-body">
//         <h4 class="card-title text-center">${name}</h4>
//         <h5 class="card-text text-center">${title}</h5>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item tarjeta text-center card-text">${rol}
//         <p>${rol2}</p>
//         </li>
//       </ul>
//       <div class="card-body">
//       <img src="${logo}" width="80"; height="80" alt="${name}">
//         <a href="#" class="card-link">Ver mas...</a>
//       </div>
//     </div>
//   </div> `;
//   print.insertAdjacentHTML('beforeend', printCard);
//   // console.log(name)
//   return;
// }

const fetchData =  () => fetch('./data/lol/lol.json')
.then(resp => resp.json())
.then(json => proccesData(json.data))
.catch(err => console.error(`El fetch fallo: => ${err}`))

window.fetchData = fetchData
