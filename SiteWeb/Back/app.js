require('dotenv').config();

const express = require('express');
const app = express();
//const fs = require('fs');
//const https = require('https');
//const cors = require('cors');
//const rateLimit = require("express-rate-limit");

//app.use(cors({
  //  origin: ['https://localhost:4200'],
    //credentials: true
//}));

//const limiter = rateLimit({
//    windowMs: 15 * 60 * 1000,
//    max: 100
//});

//app.use(limiter);

const rdvRouter = require("./rdv/rdv.router");


//const privateKey = fs.readFileSync('/etc/letsencrypt/live/menura.be/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/menura.be/fullchain.pem', 'utf8');

//const credentials = {
//    key: privateKey,
//    cert: certificate,
//};

//const httpsServer = https.createServer(credentials, app);

//production
//httpsServer.listen(process.env.APP_PORT, () => {
//    console.log('HTTPS Server running on port ' + process.env.APP_PORT);
//});


app.use(express.json());

app.use("/rdv", rdvRouter);

// http
app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running : ", process.env.APP_PORT);
});


