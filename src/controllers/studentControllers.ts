import { Request, Response } from "express";

import { Student } from "../models/studentModel";
import { Class } from "../models/classModel";
import { User } from "../models/userModel";

const addStudent = async (req: Request, res: Response) => {
    try {
        const newStudent = await Student.create({
            name: req.body.name,
            age: req.body.age,
            ClassId: req.body.classId
        })
        res.send(newStudent)
    } catch (error: any) {
        console.log(error)
    }
}


const getStudent = async (req: Request, res: Response) => {
    try {
        const getStudent = await Student.findByPk(req.params.id, {
            include: 
                {
                    model: Class,
                    attributes: {exclude: []}
                }
        })
        res.send(getStudent)
    } catch (error: any) {
        console.log(error)
    }
}


const getAll = async (req: Request, res: Response) => {
    try {
        const getStudent = await Student.findAll()
        res.send(getStudent)
    } catch (error: any) {
        console.log(error)
    }
}


const updateStudent = async (req: Request, res: Response) => {
    try {
        const getStudent = await Student.update({
            ...req.body,
            updatedAt: Date.now()
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(getStudent)
    } catch (error: any) {
        console.log(error)
    }
}


const deleteStudent = async (req: Request, res: Response) => {
    try {
        const getStudent = await Student.destroy({
            where: {
                id: req.params.id
            },
            force: true
        })
        res.json({ status: getStudent })
    } catch (error: any) {
        console.log(error)
    }
}

export {
    addStudent,
    getAll,
    updateStudent,
    getStudent,
    deleteStudent
}