import { getCompleteUserDB , getRankingDB} from "../repositories/users.repository.js"

export async function getLoggedUser(req, res){

    const {userId} = req.locals

    try {

        const { rows: [user] } = await getCompleteUserDB(userId)

        res.send(user)
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}


export async function getUserRanking(req, res) {

    try {

        const { rows: ranking } = await getRankingDB()

        res.send(ranking)

    } catch (err) {
        res.stats(500).send(err.message)
    }
}
