import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/dbConnect";
import { Class } from "./classModel";

export const Student = sequelize.define("Student", {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataType.STRING(100),
        allowNull: false,
        unique: true
    },
    age: {
        type: DataType.INTEGER,
        allowNull: true,
    },
})

Class.hasMany(Student)
Student.belongsTo(Class)


Student.sync({alter:true})