import { db } from "../db/database.connection.js";

export function createSessionDB(userId, token){
     return db.query(`INSERT INTO sessions ("userId" , token) VALUES ($1, $2);`,
      [userId , token])
}

export function getSessionDB(token){
    return db.query(`SELECT "userId" FROM sessions WHERE token=$1;`, [token])
}