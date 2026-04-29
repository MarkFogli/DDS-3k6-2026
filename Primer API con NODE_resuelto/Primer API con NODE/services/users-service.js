import { Usuario } from "../models/users.js";

// Función para registrar un nuevo usuario.
export async function login( user) {
    //test unitario para verificar que el usuario que se está intentando loguear tiene un correo y una contraseña.
    if (!user)
        return null;

    // Aquí se busca un usuario en la base de datos que tenga el mismo correo y contraseña que el usuario que se está intentando loguear.
    return await Usuario.findOne({
        where: {
            correo: user.correo,
            password: user.password
        }
    })
    // si no encuentra un usuario con ese correo y contraseña, devuelve null.
}

// Función para crear un nuevo usuario.
export async function createUser(userData) {
    // Aquí se crea un nuevo usuario en la base de datos.
    await Usuario.create(userData)}

export async function modificarUser(userData) {
        await Usuario.update(userData, {
            where: {
                id: userData.id

            }
        })
    
}

export async function deleteUser(userData) {
    await Usuario.destroy({
        where: {
            id: userData.id }
    
     })
}


// CORRRON
/*function busqueda(criterio) {
    return Usuario.findAll({
        where: {
            [op.or]: [
                { id: { [op.not]: `%${1,2,3}%` } },
                { apellido: { [op.not]: 'fogli' } }
            ]
        }
    })
}*/

