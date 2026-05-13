

const login = async () => {
    
    try {
    const url = "http://localhost:3000/users/login"
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const credentials = {
        correo: email,
        clave: password
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //convierte el objeto credentials a una cadena JSON para enviarlo en el cuerpo de la solicitud
        body: JSON.stringify(credentials)
    })
    if (response.ok) {
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data)) // Guarda los datos del usuario en el almacenamiento local
        window.location.href = "home.html" // Redirige al usuario a la página de inicio
        console.log("Login successful:", data)
        
    } else {
        throw new Error("Invalid credentials")
    }
    } catch (error) {
        console.error("Login failed:", error)
        // Aquí puedes mostrar un mensaje de error al usuario
    }
}

    
    

/*export const login = async () => {
    
    fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo: document.getElementById("email").value,
            clave: document.getElementById("password").value
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Invalid credentials");
        }
    })
    .then(data => {
        console.log("Login successful:", data);
        // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
    })
    .catch(error => {
        console.error("Login failed:", error);
        // Aquí puedes mostrar un mensaje de error al usuario
    });
}*/