const express = require('express');
//var fs = require("fs");
const app = express();
const PORT = 80;
const HOST = '0.0.0.0';

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));

app.set('views', './views');

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
});

app.get('/rendez-vous', (req, res) => {
   res.sendFile(__dirname + '/views/rdv.html')
 });

app.use(function(req, res, next){
    //res.status(404).sendFile(__dirname + '/views/erreur.html')
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
  });
  
app.listen(PORT, HOST);
console.log(`Site web est lancé sur le port: ${PORT}`);
