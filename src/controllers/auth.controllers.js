import bcrypt from "bcrypt"
import uuid from "uuid"
import { createUserDB, getUserByEmailDB } from "../repositories/users.repository.js"
import { createSessionDB } from "../repositories/auth.repository.js"

export async function signUp(req, res){

    const {name, email , password} = req.body

    try {

        const user = await getUserByEmailDB(email)

        if(user.rowCount !== 0) return res.sendStatus(409)

        const hash = bcrypt.hashSync(password , 10)

        await createUserDB(name, email , hash)

        res.sendStatus(201)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function signIn(req, res){

    const {email , password} = req.body

    try {
        const user = await getUserByEmailDB(email)
        if (user.rowCount === 0) return res.sendStatus(401)

        const correctPassword = bcrypt.compareSync(password , user.rows[0].password)
        if(!correctPassword) return res.sendStatus(401)

        const token = uuid()

        await createSessionDB(user.rows[0].id, token)
        res.send({token})

    } catch (error) {
        res.status(500).send(error.message)
    }
}

