import { Usuario } from "../models/users";
import { op } from "sequelize";

// Función para registrar un nuevo usuario.
export function login( user) {
    // Aquí se busca un usuario en la base de datos que tenga el mismo correo y contraseña que el usuario que se está intentando loguear.
    return Usuario.findOne({
        where: {
            correo: user.correo,
            password: user.password
        }
    })
}

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