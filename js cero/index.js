function procesar() {
    const lista = [];
    const localidad = ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán"];
    
    //$ es una convención para indicar que la variable hace referencia a un elemento del DOM
    let $cantidad = document.getElementById('cantidad').value;
    $cantidad = parseInt($cantidad); // convierte el string a un número entero
    let $resultados = document.getElementById('resultados');
    
    
    
    if ($cantidad > 0) {
        let promedio = 0;
        let max = {}
        let sum = 0
        let localidadData = {};
        
        // Inicializar objeto para cada localidad
        localidad.forEach(loc => {
            localidadData[loc] = { cantidad: 0, suma: 0, promedio: 0 };
        });
        
        // Genera lecturas aleatorias de temperatura para cada localidad
        for (let i = 0; i < $cantidad; i++) {
            let lecturaLoc = localidad[Math.floor(Math.random() * localidad.length)];
            let temperatura = Math.floor(Math.random() * 40); // genera una temperatura aleatoria entre 0 y 39 grados
            lista.push(`${lecturaLoc} - ${temperatura}°C`);
            
            localidadData[lecturaLoc].cantidad++;
            localidadData[lecturaLoc].suma += temperatura;
            
            if (!max.temperatura || temperatura > max.temperatura) {
                max = { localidad: lecturaLoc, temperatura: temperatura };
            }
            sum += temperatura;
        }
        
        // Calcula promedio por localidad
        localidad.forEach(loc => {
            if (localidadData[loc].cantidad > 0) {
                localidadData[loc].promedio = localidadData[loc].suma / localidadData[loc].cantidad;
            }
        });

        //3. Calcula el promedio de temperatura
        promedio = sum / $cantidad;

        let detalleLocalidades = "Detalles por localidad:\n";
        localidad.forEach(loc => {
            if (localidadData[loc].cantidad > 0) {
                detalleLocalidades += `${loc}: Cantidad=${localidadData[loc].cantidad}, Suma=${localidadData[loc].suma}°C, Promedio=${localidadData[loc].promedio.toFixed(2)}°C\n`;
            }
        });

        $resultados.textContent = `Lecturas procesadas = ${$cantidad}
Suma total = ${sum}°C
Promedio de temperatura = ${promedio.toFixed(2)}°C
Máxima temperatura registrada = ${max.temperatura}°C en ${max.localidad}

${detalleLocalidades}`;
    } else {
        $resultados.textContent = "Por favor, ingresa una cantidad válida.";
    }
}