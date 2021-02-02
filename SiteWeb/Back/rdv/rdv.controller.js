const { getRdv, createRdv } = require("./rdv.service");


module.exports = {
    getRdv: (req, res) => {
        const data = req.query;
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
    createRdv: (req, res) => {
        const data = req.body;
        createRdv(data, (err, results) => {
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
