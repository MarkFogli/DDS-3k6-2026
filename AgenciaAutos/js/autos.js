let autosAgencia = [ 
 
    { marca: 'Renault', modelo: 'Sandero', anio: 2022, precio: 19000000 }, 
 
    { marca: 'Chevrolet', modelo: 'Cruze', anio: 2019, precio: 23000000 }, 
 
    { marca: 'Citroen', modelo: 'C3', anio: 2021, precio: 17000000 }, 
 
    { marca: 'Fiat', modelo: 'Cronos', anio: 2023, precio: 21500000 } 
 
]; 

function mostrarAutos() { 
 
   const $tbody = document.getElementById('tablaAutosBody');
    $tbody.innerHTML = '';

    let body = '';
    autosAgencia.forEach(auto => {
        body += `<tr>
            <td>${auto.marca}</td>
            <td>${auto.modelo}</td>
            <td>${auto.anio}</td>
            <td>${auto.precio.toLocaleString('es-AR')}</td>
        </tr>`;
    });
    $tbody.innerHTML = body;
 
}

document.addEventListener('DOMContentLoaded', mostrarAutos); 