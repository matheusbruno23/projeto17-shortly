import {db} from "../db/database.connection.js"
import { getUrlByUserDB, getUserByIdDB } from "../repositories/users.repository.js"

export async function getLoggedUser(req, res){

    const {userId} = req.locals

    try {
        const {rows: [user]} = await getUserByIdDB(userId)
        const {rows: urls} = await getUrlByUserDB(userId)

        res.send({...user, shortenedUrls: [...urls]})
    } catch (error) {
        res.status(500).send(error.message)
    }

}

export async function getRanking(req, res){

}

