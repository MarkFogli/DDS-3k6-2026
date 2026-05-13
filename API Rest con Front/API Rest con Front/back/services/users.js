import { User } from '../models/users.js';


export async function login(user){
    if(!user)
        return null

    return await User.findOne({ where: { correo: user.correo, clave: user.clave } })
}
