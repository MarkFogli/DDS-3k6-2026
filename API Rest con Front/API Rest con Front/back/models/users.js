import {cnn_db} from '../data/cnn-sequelize.js';
import { DataTypes } from 'sequelize';

export const User = cnn_db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false  },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true  },
    clave: { type: DataTypes.STRING, allowNull: false  }
}, {
    timestamps: false,
    cnn_db
});