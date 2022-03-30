const express = require('express')

const app = express()
const port = 8000

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static(__dirname + '/public'));


app.get("/", renderPagina)



/*--------------------- Functions ------------------------- */
function renderPagina (req, res){
    res.render('index')
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })