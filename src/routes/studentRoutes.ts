import express from "express"

import { addStudent,getAll,deleteStudent,getStudent,updateStudent } from "../controllers/studentControllers"

export const studentRouter = express.Router()


studentRouter.post("/add", addStudent)
studentRouter.get("/", getAll)
studentRouter.get("/:id", getStudent)
studentRouter.put ("/:id", updateStudent)
studentRouter.delete("/:id", deleteStudent)