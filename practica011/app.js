const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine' , 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        title: "Titulo",
        name: ["Guillermo", "Millan", "Delgado"],
        sub: "lista"
    });
});

let server = app.listen(port, () => {
    console.log(`servidor corriendo en ${server.address().port}`)
})

hbs.registerPartial('nav', '{{sub}}')