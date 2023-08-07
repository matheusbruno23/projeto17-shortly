import { db } from "../db/database.connection.js";

export function createShortUrlDB(url, shortUrl, userId){
    return db.query(`INSERT INTO urls (url, "shortUrl" , "userId") VALUES ($1, $2, $3) 
    RETURNING id, "shortUrl";`,
      [url, shortUrl, userId])
}

export function getUrlByIdDB(id){
    return db.query(`SELECT id, url, "shortUrl" FROM urls WHERE id=$1;`, [id])
}

export function getUrlByLinkDB(shortUrl){
    return db.query(`SELECT url FROM urls WHERE "shortUrl"=%1;`, [shortUrl])
}

export function increaseViewsDB(shortUrl){
    return db.query(`UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl";`, [shortUrl])
}

export function deleteUrlDB(id){
    return db.query(`DELETE FROM urls WHERE id=$1;`, [id])
}