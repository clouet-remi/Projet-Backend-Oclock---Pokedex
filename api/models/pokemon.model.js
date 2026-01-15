import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Pokemon extends Model {}

Pokemon.init({
    name: {
        type: DataTypes.TEXT, 
        allowNull: false, 
        unique: true
    }, 

    hp: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    attack: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    defense: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    special_attack: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    special_defense: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    speed: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
}, {
    sequelize, 
    tableName: "pokemon"
})