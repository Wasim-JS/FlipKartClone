const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name');
const p = document.querySelector('.p')
window.addEventListener('load',()=>{
    p.innerHTML = myParam
})