import express from "express"

import { addUser,deleteUser,getUser,updateUser } from "../controllers/userControllers"

export const userRouter = express.Router()


userRouter.post("/add", addUser)
//userRouter.get("/", getAll)
userRouter.get("/:id", getUser)
userRouter.put ("/:id", updateUser)
userRouter.delete("/:id", deleteUser)