import {customAlphabet} from 'nanoid'
import { createShortUrlDB } from '../repositories/urls.repository.js'

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
    try {
            
    } catch (error) {
        res.status(500).send(error.message)
    }


}

export async function openUrl(req, res){
    try {
            
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

