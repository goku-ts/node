import { Sequelize } from "sequelize";
require("dotenv").config()

const DB = process.env.DB_URL as string

const sequelize = new Sequelize('school', 'postgres', 'admin', { 
     dialect: "postgres",
     host: "localhost",
     port : 5432
     });

const dbConnect = () => {
    sequelize.authenticate()
        .then(() => console.log("Connected to Database"))
        .catch((error) => console.log(error))
}

export {
    sequelize,
    dbConnect
}