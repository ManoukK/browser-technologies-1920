require('dotenv').config();

const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 2121;

app.set('view engine', 'ejs');
app.set('views', 'views');

//zet naar static bij uploaden
app.use(express.static('static'));

    //shortcuts for queries
    //q1 = naam
    //q2 = email
    //q3 = Telefoonnummer
    //q4 = geboorte datum
    //q4a = geboorte dag
    //q4b = geboorte maand
    //q4c = geboorte jaar
    //q5 = minor cijfer


app.get('/survey1', function(req, res){ 
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q7a: "",
        q7b: "",
        q7c: "",
        q7d: "",
        q8: "",
        q9: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('survey1', { queries, url });
});

app.get('/survey2', function(req, res){ 
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q7a: "",
        q7b: "",
        q7c: "",
        q7d: "",
        q8: "",
        q9: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('survey2', { queries, url });
});

app.get('/survey3', function(req, res){ 
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q7a: "",
        q7b: "",
        q7c: "",
        q7d: "",
        q8: "",
        q9: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('survey3', { queries, url });
});

app.get('/checkPage', function(req, res){ 
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q7a: "",
        q7b: "",
        q7c: "",
        q7d: "",
        q8: "",
        q9: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('checkPage', { queries, url });
});

app.get('/finish', function(req, res){ 
    let url = req.url;
    let queries = {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q7a: "",
        q7b: "",
        q7c: "",
        q7d: "",
        q8: "",
        q9: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('finish', { queries, url });
});

app.get('/', function(req, res){ 
    res.render('main');
});

app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});

//als ik alles terug wil zetten moet ik
//index in public onderverdelen
//build css aanzetten
//server naar static zetten
//head ccs weg dus alleen /index.css
