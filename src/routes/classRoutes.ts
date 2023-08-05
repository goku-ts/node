import express from "express"

import { addClass,deleteClass,getAll,getClass,updateClass } from "../controllers/classControllers"

export const classRouter = express.Router()


classRouter.post("/add", addClass)
classRouter.get("/", getAll)
classRouter.get("/:id", getClass)
classRouter.put ("/:id", updateClass)
classRouter.delete("/:id", deleteClass)