const { getRdv, getRdvAnv, getRdvBru, createRdv } = require("./rdv.service");

module.exports = {
    getRdv: (req, res) => {
        let data = req.params;
        getRdv(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getRdvAnv:  (req, res) => {
        let data = req.query;
        getRdvAnv( data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getRdvBru: (req, res) => {
        let data = req.query;
        getRdvBru(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    createRdv: (req, res) => {
        const body = req.body;
        createRdv(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
};
