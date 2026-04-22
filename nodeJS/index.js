console.log("Hello, World!");

console.log("Hello, World2!");

console.log("Hello, World3!");

console.log('A');
setTimeout(() => {
console.log('B');
}, 1000);
console.log('C');

// función que devuelve una promesa
/*
function leer_recurso(nombre) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log(`Recurso ${nombre} leído`);
            console.log(`...`);
            txt = `Contenido del recurso ${nombre}`;
        }, 1000);

    });
}

// llamar a la función que devuelve la promesa
const p = leer_recurso("A");
 // funión que se ejecuta cuando la promesa se resuelve
p.then((txt) => {
    console.log("Contenido del recurso leído: " + txt);
}).catch((err) => {
    console.error("Error al leer el recurso: " + err);
});*/


async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Usuarios obtenidos:");
    console.log(users);
    }
    
    
await main();
console.log("se ejecuta después de main()");