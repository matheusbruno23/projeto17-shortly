import {customAlphabet} from 'nanoid'
import { createShortUrlDB, getUrlByIdDB, getUrlByLinkDB, increaseViewsDB } from '../repositories/urls.repository.js'

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz' , 10)



export async function shortUrl(req, res){

    const {userId} = res.locals
    const {url} = req.body

    const shortUrl = nanoid()

        try {

            const result = await createShortUrlDB(url, shortUrl , userId)

            res.status(201).send(result.rows[0])
        } catch (error) {
            res.status(500).send(error.message)
        }



}

export async function getUrl(req, res){

    const {id} = req.params
    try {
        const url = await getUrlByIdDB(id)
        if(url.rowCount === 0) return res.sendStatus(404)

        res.send(url.rows[0])
            
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function openUrl(req, res){

    const {shortUrl} = req.params

    try {
            const url = await getUrlByLinkDB(shortUrl)
            if(url.rowCount === 0) return res.sendStatus(404)

            await increaseViewsDB(shortUrl)

        res.redirect(url.rows[0].url)

    } catch (error) {
        res.status(500).send(error.message)
    }


}

export async function deleteUrl(req, res){
    try {
            
    } catch (error) {
        res.status(500).send(error.message)
    }


}

