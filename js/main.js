/**Login-form**/
var linkLogin = document.querySelector(".login");
var loginPopap = document.querySelector(".modal-content");
var modalOverlay = document.querySelector(".modal-overlay");

var closePopap = loginPopap.querySelector(".modal-content-close");
var form = loginPopap.querySelector("form");
var login = loginPopap.querySelector("[name=login]");
var password = loginPopap.querySelector("[name=password]");
var storage = localStorage.getItem("login");

linkLogin.addEventListener("click",function(event){
    event.preventDefault();
    loginPopap.style.display="block";
    modalOverlay.style.display="block";
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
closePopap.addEventListener("click",function(){
    loginPopap.classList.remove("modal-error");
    loginPopap.style.display="none";
    modalOverlay.style.display="none";
});

form.addEventListener("submit",function(event){
    if(!login.value || !password.value){
        event.preventDefault();
        loginPopap.classList.add("modal-error");
    }else{
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (loginPopap.style.display=="block") {
            loginPopap.classList.remove("modal-error");
            loginPopap.style.display="none";
            modalOverlay.style.display="none";
        }
    }
});

/***Map**/
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.style.display="block";
    modalOverlay.style.display="block";
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.style.display="none";
    modalOverlay.style.display="none";
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.style.display=="block"){
            mapPopup.style.display="none";
            modalOverlay.style.display="none";
        }
    }
});