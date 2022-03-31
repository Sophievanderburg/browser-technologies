const express = require('express')
var bodyParser = require('body-parser')


const app = express()
const port = 8000

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


/*--------------------- Routes ------------------------- */
app.get("/", renderPagina)
app.post("/", verzenden)

app.get("/verzonden", renderVerzenden)

/*--------------------- Functions ------------------------- */
function renderPagina (req, res){
    res.render('index')
}

function verzenden (req, res){
    console.log(req.body)
    res.redirect('/verzonden');
}

function renderVerzenden(req, res){
    res.render('verzonden')
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })