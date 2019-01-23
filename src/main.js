let search = document.getElementById('search');
const root = document.getElementById('root');
const dropdown = document.getElementById('dropdown')
const rols = document.getElementsByClassName('rols')
const voltear = document.getElementById('voltear')
let dataFiltrada = JSON.parse(localStorage.getItem('newData'))
$('#myModal').modal('toggle')


dropdown.addEventListener('change', () => {
  for (let i = 0; i < rols.length; i++) {
    if (rols[i].checked) {
      let rolFiltered = dataFiltrada.filter(champ => champ.rol.toLowerCase() === rols[i].id)
      printData(rolFiltered)
    }
  }
})

voltear.addEventListener('click', () => {
  dataFiltrada = dataFiltrada.reverse()
  printData(dataFiltrada)
  return dataFiltrada
})

const filterData = () => {
  let letterSearch = search.value.toLowerCase()
  const filtered = dataFiltrada.filter(champ => champ.name.toLowerCase().indexOf(letterSearch) >= 0)
  printData(filtered)
  return filtered
}


const printData = (data) => {
  let str = data.reduce((prev, item) => `${prev} ${championToStr(item)}`, '');
  root.innerHTML = str;
  return str;
}


const championToStr = (champion) => {
  return `<div class=" col-12 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
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
          <img src="${champion.logo}" width="25%"; height="25%" alt="${champion.name}">
          <span class="text-right">
            <a href="#" class="card-link">Ver mas...</a>
          </span>
        </div>
        </div>
    </div> `
}



search.addEventListener('keyup', filterData)

const main = () => {
  window.fetchData()
    .then(data => printData(data))
    .catch(err => console.error(`error ${err}`))
}

window.addEventListener('load', main);
// document.getElementById('pruebaFondo').style.backgroundImage = "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')";
