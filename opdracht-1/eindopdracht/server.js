const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

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

    userInput = JSON.stringify(req.body)
	console.log(userInput);

	fs.writeFile('informatie.json', userInput, 'utf8', cb => {
		console.log('werk dan');
	});

    res.redirect('/verzonden');
}

function renderVerzenden(req, res){
    let ingevuld = fs.readFile('informatie.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);
    });

    console.log('ingevuld:', ingevuld)
    
    res.render('verzonden')


}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })