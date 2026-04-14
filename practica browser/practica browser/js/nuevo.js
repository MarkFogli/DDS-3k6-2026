const $btn = document.getElementById('btn-aceptar')
$btn.addEventListener('click', ()=>{

    const data = JSON.parse(localStorage.getItem('data')) || []
    data.push({ marca: 'Renault', modelo: 'Sandero', anio: 2022, precio: 19000000 })
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "index.html"
})