import * as api from "./localAPI.js"


//Prevent default on event
export function preventDefault(event, targetSelector) {
  const target = document.querySelector(targetSelector);
  target.addEventListener(event, e => e.preventDefault());
}

//Recupere les valeur dans les inputs et construit l'objet a sauvegarder
export function getNewListItem() {
  let newItem = {
    title:document.querySelector("#titleInput").value,
    username: document.querySelector("#usernameInput").value,
    password: document.querySelector("#passwordInput").value
  };
  return newItem
}

//Simple onclick fonction
export function onClick(targetSelector, cb) {
  document.querySelector(targetSelector).addEventListener("click", e => cb(e));
}


//Render le Dom apres avoir recupéré les datas
export function updateDom(rootSelector){
  let data = api.getAll()
  if (data === null) return
  let root = document.querySelector(rootSelector)
  root.innerHTML = ''
  data.forEach(el => root.appendChild(buildListItem(el)))
  attachCopy(".app__list-item", 2)
  attachDelete(".app__list-item__cross", 3)
}

//Attache un clique event pour copier le mot de pass
export function attachCopy(selector, idx) {
  let items = document.querySelectorAll(selector)
  items.forEach(item => {
    item.addEventListener('click', e => {
      copyStringToClipboard(e.target.childNodes[idx].getAttribute('data-pass'))
    })
  });
}

//Attache un clique event pour delete un item
function attachDelete(selector, idx) {
  let items = document.querySelectorAll(selector)
  items.forEach(item => {
    item.addEventListener('click', e => {
      api.deleteOne(e.target.parentElement.childNodes[0].innerText.slice(9));
      dom.updateDom(".app__list")
      
    })
  })
}


//copyStringToClipboard
function copyStringToClipboard (str) {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {display: 'none'};
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

//Fabrique le HTML pour 1 item
function buildListItem(obj){
  let listItem = document.createElement('li')
  listItem.classList.add('app__list-item')

  let title = document.createElement('h3')
  title.innerText = "WebSite: "+obj.title
  listItem.appendChild(title)

  let username = document.createElement('p')
  username.innerText = "Username: "+obj.username
  listItem.appendChild(username)

  let password = document.createElement('p')
  password.innerText = "Password: "+obj.password
  password.setAttribute('data-pass', obj.password)
  listItem.appendChild(password)

  let cross = document.createElement('div')
  cross.classList.add("app__list-item__cross")
  cross.innerText = "X"
  listItem.appendChild(cross)

  return listItem
}
