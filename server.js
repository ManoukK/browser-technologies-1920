const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 2121;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('static'));



// app.get('/:id', function(req, res){ 
//     //hier heeft Robin mij mee geholpen. 
//     // const index = req.params.id;
//     // const renderData = results[index]
//     const username = req.body.name
//     res.render('detail', { username })
// });

// app.get('/', function(req, res){ 
//     data.getData()
//     .then(function(results) { 
//         res.render('main', { results })
//     });
// });

app.get('/', function(req, res){ 
    console.log(req.query.fname);

    let queries = {
        fname: "",
        lname: "",
    };

    if (Object.entries(req.query).length > 0) {
        queries = req.query;
    }

    res.render('main', { queries });
});

app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});