import {Posts} from "../Models/Posts.js"
import fetch from "node-fetch"

async function obtenerPosts(){
    const result = []
    const url = "https://jsonplaceholder.typicode.com/posts"

    try {
        console.log("Ingresando al obtenerPosts")
        const promesa = await fetch(url)

        const data = await promesa.json()
        console.log("el data es:", data)

        data.forEach(element => {
            const postAux = new Posts()
            postAux.body = element.body
            postAux.id = element.id
            postAux.title = element.title

            result.push(postAux)
        });

        return result

    } catch (error) {
        console.log("Error!!!!", error)
    }
}

async function obtenerUserPorNombre(nombre){

    const usuarios = []
    const user = await Posts.obtenerUserPorNombre(nombre)
    
    const url = `https://jsonplaceholder.typicode.com/users?username=${nombre}`
    try {
        const promesa = await fetch(url)
        const data = await promesa.json()
        return data[0]
    } catch (error) {
        console.log("Error!!!!", error)
    }
}

async function obtenerPostsPorNombre(nombre){
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${nombre}`
    try {
        const promesa = await fetch(url)
        const data = await promesa.json()
        return data
    } catch (error) {
        console.log("Error!!!!", error)
    }
}

export default {
    obtenerPosts
    ,obtenerUserPorNombre
    ,obtenerPostsPorNombre
}