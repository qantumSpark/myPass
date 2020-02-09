
//Récupère toutes les datas du localStorage
export function getAll() {
  let data = JSON.parse(window.localStorage.getItem('data'))
  return data
}

//Update un mdp
export function updateOne(name, obj) {
  let data = getAll()
  let newData = data.map((el, idx) => {
    if(el.username === name){
      el.username = obj.username 
      el.password = obj.password
      return el
    }else{
      return el
    }
  })
  data=newData
  refresh(data)
  return newData 
}


//Suppr le mdp 
export function deleteOne(name) {
  let data = getAll()
  let newData = data.filter(e => e.title !== name )
  refresh(newData);
}

//Ajoute un nouveau mdp
export function addOne(obj){
  let data = getAll()
  if(data !== null){
    data.push(obj)
  }else{
    data = [obj]
  }
  refresh(data)
}

//Remplace les datas
function refresh(data){
  //console.log(data);
  let parsedData = JSON.stringify(data)
  window.localStorage.clear()
  window.localStorage.setItem('data', parsedData)
}