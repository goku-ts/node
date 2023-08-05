import express from "express"

import { dbConnect } from "./database/dbConnect"
import {classRouter} from "./routes/classRoutes"
import { studentRouter } from "./routes/studentRoutes"
import { userRouter } from "./routes/userRoutes"

const app =  express()

app.use(express.json())

app.use("/class", classRouter)
app.use("/student", studentRouter)
app.use("/user", userRouter)

app.listen(3000, ()=>dbConnect())