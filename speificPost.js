const body = document.getElementById("body")
const info = document.getElementById("info")
const name = document.getElementById("name")
const age = document.getElementById("age")
const gender = document.getElementById("gender")
const address = document.getElementById("address")
const idProof = document.getElementById("idProof")
const params = new URLSearchParams(location.search);
const myStorage = window.localStorage
const image = document.getElementById("image")
var array = JSON.parse(myStorage.getItem("users")).user || []
console.log(array, params.get("id"))
var currentUser = array.filter((element) => element.id == params.get("id"))[0]
console.log(currentUser)
image.innerHTML = '<img src="' + currentUser.image + '"></img>'
info.innerHTML = '<p>' + currentUser.name + '</p>'
info.innerHTML += '<p>' + currentUser.age + '</p>'
info.innerHTML += '<p>' + currentUser.gender + '</p>'
name.innerHTML += ' ' + currentUser.name
age.innerHTML += ' ' + currentUser.age
gender.innerHTML += ' ' + currentUser.gender
address.innerHTML += ' ' + currentUser.address1 + " " + currentUser.address2
idProof.innerHTML = ' ' + currentUser.idProff + " : " + currentUser.identity
    // body.innerHTML = '<h1>' + params.get("id") + '</h1>'

const onEditClick = (event) => {
    window.location.replace("./index.html?id=" + currentUser.id);
}