import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/dbConnect";

import { Class } from "./classModel";

export const User = sequelize.define("User", {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataType.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataType.STRING(100),
        allowNull: false,
    },
})



User.sync({ alter: true })