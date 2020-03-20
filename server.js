require('dotenv').config();

const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 2121;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('static'));

    //shortcuts for queries
    //q1 = naam
    //q2 = email
    //q3 = Telefoonnummer
    //q4a = geboorte dag
    //q4b = geboorte maand
    //q4c = geboorte jaar

app.get("/savePage1", (req, res) => {
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4a: "",
        q4b: "",
        q4c: "",
        cijfer: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('savePage1', { queries, url });
  });

app.get('/', function(req, res){ 
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4a: "",
        q4b: "",
        q4c: "",
        cijfer: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('main', { queries });
});

app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});