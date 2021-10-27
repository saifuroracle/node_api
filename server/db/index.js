const mysql = require('mysql');

mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'root',
    database: 'node_app',
    host: 'localhost',
    port: '3306'
})

let db = {};

db.all = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`select * from node_app`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = db