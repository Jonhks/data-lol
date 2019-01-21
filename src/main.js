const printData = (data) => {
  let str =  data.reduce( (prev, item) => `${prev} ${item.name}` , '');
//   const print = document.getElementById('root');
//   let name = data.name
//   let title = data.title
//   let rol = data.rol
//   let rol2 = data.rol2
//   let image = data.image
//   let logo = data.logo
//   let printCard = 
//   print.insertAdjacentHTML('beforeend', printCard);
//   // console.log(name)
//   return;
console.log(str);
}

const championToStr = (chamion) => `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
    <div class="card champs">
        <img  id="${name}" src="${image}" width="100%"; height="40%" class="card-img-top" alt="${name}" data-toggle="modal" data-target=".bd-example-modal-xl">
        <div class="card-body">
            <h4 class="card-title text-center">${name}</h4>
            <h5 class="card-text text-center">${title}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item tarjeta text-center card-text">${rol} 
            <p>${rol2}</p>
            </li>
        </ul>
        <div class="card-body">
        <img src="${logo}" width="80"; height="80" alt="${name}">
            <a href="#" class="card-link">Ver mas...</a>
        </div>
        </div>
    </div> `;

const main = () => {
  fetchData().then(data => {
    // console.log(data)
    printData(data)
  }).catch(err => {
    alert(`error ${err}`);
  })
}

window.addEventListener('load', main);
