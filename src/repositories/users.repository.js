import { db } from "../db/database.connection.js";

export function getUserByEmailDB (email){
    return db.query(`SELECT * FROM users WHERE email=$1;` , [email])
}

export function createUserDB(name, email, password){
    return db.query(`INSERT INTO users (name, email, password) VALUES ($1 , $2, $3);`, [name, email , password])
}

export function getUserByIdDB(id){
    return db.query(`SELECT users.id , users.name, SUM(urls."visitCount") AS "visitCount"
    FROM users JOIN urls ON users.id = urls."userId"
    WHERE users.id=$1
    GROUP BY users.id, users.name;`, [id])
}

export function getUrlsByUserDB(userId){
    return db.query(`SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId"=$1;`, [userId])
}


export function getRankingDB() {
    return db.query(`
        SELECT users.id, users.name, COUNT(urls.id) "linksCount", COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
            FROM users 
            LEFT JOIN urls ON users.id = urls."userId"
            GROUP BY users.id, users.name
            ORDER BY "visitCount" DESC, "linksCount" DESC
            LIMIT 10;
    `)
}