const pool = require("../database");


module.exports = {
    getRdv: (data, callBack) => {
        pool.query(
            'select * from rdv',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    createRdv: (data, callback) =>{
        pool.query(
            'insert into rdv(Nom, Prenom, date, email, telephone, type) ' +
            'values(?,?,?,?,?,?)',
            [
                data.nom,
                data.prenom,
                data.date,
                data.email,
                data.telephone,
                data.type
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
};
