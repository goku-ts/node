import { Request, Response } from "express";

import { User } from "../models/userModel";
import { Class } from "../models/classModel";
import { Student } from "../models/studentModel";

const addClass = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.body.userId)
        if (!user) return res.json({ message: "no user found" })
        const newClass = await Class.create({
            name: req.body.name,
            UserId: user?.dataValues.id
        })

        res.send(newClass)
    } catch (error: any) {
        console.log(error)
    }
}


const getClass = async (req: Request, res: Response) => {
    try {
        const getClass = await Class.findByPk(req.params.id)
        const getStudent = await Student.findAll({where:{ClassId : getClass?.dataValues.id}})
        res.json({
            info : getClass,
            students : getStudent 
        })
    } catch (error: any) {
        console.log(error)
    }
}


const getAll = async (req: Request, res: Response) => {
    try {
        const getClass = await Class.findAll()
        res.send(getClass)
    } catch (error: any) {
        console.log(error)
    }
}


const updateClass = async (req: Request, res: Response) => {
    try {
        const getClass = await Class.update({
            ...req.body,
            updatedAt: Date.now()
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(getClass)
    } catch (error: any) {
        console.log(error)
    }
}


const deleteClass = async (req: Request, res: Response) => {
    try {
        const getClass = await Class.destroy({
            where: {
                id: req.params.id
            },
            force: true
        })
        res.json({ status: getClass })
    } catch (error: any) {
        console.log(error)
    }
}

export {
    addClass,
    getAll,
    updateClass,
    getClass,
    deleteClass
}