let search = document.getElementById('search');
const root = document.getElementById('root');
const dropdown = document.getElementById('dropdown')
const rols = document.getElementsByClassName('rols')
const voltear = document.getElementById('voltear')
let paraModal = document.getElementById('para-modal')
let dataFiltrada = JSON.parse(localStorage.getItem('newData'))
const cards = document.getElementsByClassName('card-img-top');
$('#myModal').modal('toggle')

dropdown.addEventListener('change', () => {
  for (let i = 0; i < rols.length; i++) {
    if (rols[i].checked) {
      let rolFiltered = dataFiltrada.filter(champ => champ.rol.toLowerCase() === rols[i].id)
      printData(rolFiltered)
    }
  }
})

const printModal = (champ) =>{
  paraModal.innerHTML = "";
  let modal = `
  <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl ">
        <div class="modal-content">
          <div style="background-image: url(${champ.image}"
            id="pruebaFondo" class="card text-center my-modal">
            <div class="card-header">
              <h2>${champ.name}</h2>
              <p class="card-text">${champ.title}</p>
            </div>
            <div class="card-body"> 
              <h5 class="card-title">${champ.rol}</h5>
            </div>
            <div class="card-footer ">
              <h4>Estadisticas</h4>
              <div class="row footer-card">
                <div class="col-md-4 text-left">
                  <ul>
                    <li>Attack: ${champ.info.attack} </li>
                    <li>Defense: ${champ.info.defense}</li>
                    <li>Magic: ${champ.info.magic}</li>
                    <li>Dificulty: ${champ.info.difficulty}</li>
                  </ul>
                </div>
                <div class="col-md-4 text-left">
                  <ul>
                    <li>Armor : ${champ.stats.armor}</li>
                    <li>Armorperlevel: ${champ.stats.armorperlevel}</li>
                    <li>Attackdamage: ${champ.stats.attackdamage}</li>
                    <li>Attackrange: ${champ.stats.attackrange}</li>
                  </ul>
                </div>
                <div class="col-md-4 text-left">
                  <ul>
                    <li>Attackspeedperlevel: ${champ.stats.attackspeedperlevel}</li>
                    <li>Crit: ${champ.stats.crit}</li>
                    <li>Movespeed: ${champ.stats.movespeed}</li>
                    <li>Spellblock: ${champ.stats.spellblock}</li>
                  </ul>
                </div>
              </div>
              <div class="select"
                <div class="btn-group">
                  <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Detalles
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Attack: ${champ.info.attack} </a>
                    <a class="dropdown-item" href="#">Defense: ${champ.info.defense}</</a>
                    <a class="dropdown-item" href="#">Magic: ${champ.info.magic}</</a>
                    <a class="dropdown-item" href="#">Difficulty ${champ.info.difficulty}</</a>
                    <a class="dropdown-item" href="#">Armor: ${champ.stats.armor}</</a>
                    <a class="dropdown-item" href="#">Attack damage: ${champ.stats.attackdamage}</</a>
                    <a class="dropdown-item" href="#">Move speed: ${champ.stats.movespeed}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  paraModal.innerHTML = modal;
}

const prepararModal = () =>{
  for (let i= 0; i < cards.length; i++ ) {
    cards[i].addEventListener('click', () =>{
      let filtered = dataFiltrada.filter(champ => champ.name.toLowerCase() === event.target.id)
      let champ = filtered[0]
      printModal(champ)
    })
  }
}




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
  return `<div class=" col-12 col-xl-2 col-sm-6 col-md-3 shadow-lg p-3 mb-0 target ">
    <div class="card champs">
        <img  id="${champion.name.toLowerCase()}" src="${champion.image}" width="100%"; height="40%" class="card-img-top" alt="${champion.name}" data-toggle="modal" data-target=".bd-example-modal-xl">
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
          <img src="${champion.logo}" width="25%"; height="25%" alt="${champion.name}" class="img-micro" >
          <span>
            <a href="https://universe.leagueoflegends.com/es_MX/champion/${champion.name.toLowerCase()}/" target= "_blanck" class="card-link">Ver mas...</a>
          </span>
        </div>
        </div>
    </div> `
}




search.addEventListener('keyup', filterData)

const main = () => {
  window.fetchData()
    .then(data => printData(data))
    .then(data => prepararModal())
    .catch(err => console.error(`error ${err}`))
}

window.addEventListener('load', main);
