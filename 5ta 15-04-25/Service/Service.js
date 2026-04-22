import datos from '../Data/Post_data.js'

async function obtenerPosts(){
    const result = await datos.obtenerPosts()
    return result
}

function obtenerUsers(){

}

async function obtenerUserPorNombre(nombre){
    const result = await datos.obtenerUserPorNombre(nombre)
    return result
}

async function obtenerPostsPorNombre(nombre){
    const result = await datos.obtenerPostsPorNombre(nombre)
    return result
}

export default {
    obtenerPosts,
    obtenerUserPorNombre,
    obtenerPostsPorNombre
}