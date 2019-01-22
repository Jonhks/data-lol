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



const fetchData =  () => fetch('./data/lol/lol.json')
.then(resp => resp.json())
.then(json => proccesData(json.data))
.catch(err => console.error(`El fetch fallo: => ${err}`))

window.fetchData = fetchData
