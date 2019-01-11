const printData = (data) => {
    let str =  data.reduce( (prev, item) => `${prev} ${championToStr(item)}` , '');
    document.getElementById('root').innerHTML = str
}

const championToStr = (champion) => `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
    <div class="card champs">
        <img  id="${champion.name}" src="${champion.image}" width="100%"; height="40%" class="card-img-top" alt="${champion.name}" data-toggle="modal" data-target=".bd-example-modal-xl">
        <div class="card-body">
            <h4 class="card-title text-center">${champion.name}</h4>
            <h5 class="card-text text-center">${champion.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item tarjeta text-center card-text">${champion.rol} 
            <p>${champion.rol2}</p>
            </li>
        </ul>
        <div class="card-body">
        <img src="${champion.logo}" width="80"; height="80" alt="${champion.name}">
            <a href="#" class="card-link">Ver mas...</a>
        </div>
        </div>
    </div> `;

const main = () => {
  fetchData().then(data => {
    // console.log(data)
    printData(data)
  }).catch(err => {
    console.log(`error ${err}`);
  })
}

window.addEventListener('load', main);
