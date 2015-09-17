var express = require('express'),
    cors = require('cors');

var app = express();
app.use(cors());

app.use(express.bodyParser());


var authors = [
    { id: "1", author: "John Hudson", text: "Some author text from John Hudson", userName: "johnhudson" },
    { id: "2", author: "Peter", text: "Some author text from peter", userName: "petermary" },
    { id: "3", author: "Phani Kumar", text: "Some author text from Phani", userName: "phanikumar" },
    { id: "4", author: "Manish", text: "Some author text from Manish", userName: "manishagarwal" },
    { id: "5", author: "Mary", text: "Some author text from John Hudson", userName: "mary123" }

];


app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(authors);

});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.post('/author', function (req, res) {
    req.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");


    if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
        res.statusCode = 400;
        return res.send("Error 400: Incorrect Object");
    }

    var newAuthor = {
        author: req.body.author,
        text: req.body.text
    };

    authors.push(newAuthor);
    res.json(true);


});

app.listen(process.env.PORT || 2020);