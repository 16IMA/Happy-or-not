'use strict';

//Establecemos variables con los elementos del HTMl a usar

const faceEmoticon = document.querySelector(".js_faceEmoticon");
const selectorFace = document.querySelector(".js_selectorFace");
const body = document.querySelector("body");
const selectionBtn = document.querySelector(".js_selectionBtn");



selectionBtn.addEventListener("click", (ev) => {
    debugger;
    ev.preventDefault();
    const newFace = selectorFace.value;
    if(newFace ==="happy"){
        faceEmoticon.innerHTML = ":)"
    }
    else {
    faceEmoticon.innerHTML = ":("
    };
})



