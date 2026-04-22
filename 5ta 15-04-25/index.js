import servicio from "./Service/Service.js"

(async function main(){
    console.log("Ingresando al main...")
    console.log("***************")
    console.log("Obteniendo posts")
    const posts = await servicio.obtenerPosts()
    console.log(posts)
    console.log("Obteniendo users")
    
    console.log("***************")
    


})()