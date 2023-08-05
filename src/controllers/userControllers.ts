import { Request, Response } from "express";

import { User } from "../models/userModel";
import { Class } from "../models/classModel";

const addUser = async (req: Request, res: Response) => {
    try {
        const {username,password} = req.body
        const user = await User.findOne({where:{username : username}})
        if(user) return res.json({
            message : "username already exists, try logging in"
        })
        const newUser = await User.create({
            username,
            password
        })

        res.json({
            status : "SUCCESS",
            message : "Account Created"
        })
    } catch (error: any) {
        console.log(error.errors[0].message)
    }
}


const getUser = async (req: Request, res: Response) => {
    try {
        const getUser = await User.findByPk(req.params.id)
        //const getClass = await Class.findAll({ where: { UserId: getUser?.dataValues.id } })

        res.json({
            info: getUser,
            //clases: getClass 
        })
    } catch (error: any) {
        console.log(error)
    }
}




const updateUser = async (req: Request, res: Response) => {
    try {
        const getUser = await User.update({
            ...req.body,
            updatedAt: Date.now()
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(getUser)
    } catch (error: any) {
        console.log(error)
    }
}


const deleteUser = async (req: Request, res: Response) => {
    try {
        const getUser = await User.destroy({
            where: {
                id: req.params.id
            },
            force: true
        })
        res.json({ status: getUser })
    } catch (error: any) {
        console.log(error)
    }
}

export {
    addUser,
    updateUser,
    getUser,
    deleteUser
}