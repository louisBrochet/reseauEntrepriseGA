const pool = require("../database");


module.exports = {
    getRdv: (data, callBack) => {
        pool.query(
            'select * from rdv where date =?',
            [data.date],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getRdvAnv: (data, callBack) => {
        pool.query(
            'select * from rdv where lieu=?',
            ["Anvers"],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getRdvBru: (data, callBack) => {
        pool.query(
            'select * from rdv where lieu=?',
            ["Bruxelles"],
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
            'insert into rdv(nom, prenom, date, email, telephone, type, lieu)' +
            'values(?,?,?,?,?,?,?)',
            [
                data.nom,
                data.prenom,
                data.date,
                data.email,
                data.telephone,
                data.type,
                data.lieu
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
