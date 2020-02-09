import * as api from "./js/localAPI.js"
import * as dom from "./js/domInteractions.js"
import * as gen from "./js/generator.js"

//Load les datas et populate le DOM au chargement de la page
window.addEventListener('load', e => {
  dom.updateDom(".app__list")
  
})

//Ajoute un nouveau mot de passe et réaffiche le DOM
dom.onClick('#formBtn', e => {
  e.preventDefault()
  let newItem = dom.getNewListItem()
  api.addOne(newItem)
  dom.updateDom(".app__list")
})

//Génère un nouveau mdp et remplit l'input avec ce dernier.
dom.onClick("#generateBtn", e => {
  let rdmPass =  gen.createPsw(40)
  document.querySelector('#passwordInput').value =  rdmPass
})

