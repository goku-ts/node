import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/dbConnect";
import { User } from "./userModel";


export const Class = sequelize.define("Class", {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataType.STRING(50),
        allowNull: false,
    },
    teacher: {
        type: DataType.STRING(100),
        allowNull: false,
        defaultValue: "Sir Mike"
    },
})

User.hasMany(Class)
Class.belongsTo(User)

Class.sync({alter:true})