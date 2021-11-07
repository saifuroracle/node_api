const pool = require('../../config/database.js');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `
                insert into user (name, email, password)
                values('test', 'test@mail.com', '12345678')
            `,
            [
                data.name,
                data.email,
                data.password,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}