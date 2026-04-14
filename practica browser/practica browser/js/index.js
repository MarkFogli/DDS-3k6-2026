/*const data = [ 
    { marca: 'Renault', modelo: 'Sandero', anio: 2022, precio: 19000000 }, 
    { marca: 'Chevrolet', modelo: 'Cruze', anio: 2019, precio: 23000000 }, 
    { marca: 'Citroen', modelo: 'C3', anio: 2021, precio: 17000000 }, 
    { marca: 'Fiat', modelo: 'Cronos', anio: 2023, precio: 21500000 } //  
]; */

//eventos:
document.addEventListener("DOMContentLoaded", fillData);
const $btn = document.getElementById('btn-filtrar')
$btn.addEventListener('click', () => {
    const $tbody = document.getElementById('table-body')
    $tbody.innerHTML = ""
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const dataFiltered = data.filter(x => x.marca === document.getElementById('select-marca').value);
    dataFiltered.forEach(x => {
        let row = `<tr> 
                <td>${x.marca}</td> 
                <td>${x.modelo}</td> 
                <td>${x.anio}</td> 
                <td>$ ${x.precio.toLocaleString('es-AR')}</td> 
                 </tr>`
        $tbody.innerHTML += row
    })
})


function fillData() {
    const $tbody = document.getElementById('table-body')
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.forEach(x => {
        let row = `<tr> 
                <td>${x.marca}</td> 
                <td>${x.modelo}</td> 
                <td>${x.anio}</td> 
                <td>$ ${x.precio.toLocaleString('es-AR')}</td> 
                 </tr>`
        $tbody.innerHTML += row
    })
}