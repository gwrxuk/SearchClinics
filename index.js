const express = require('express')
const clinics = require("./util/clinics")
const path = require('path')
const app = express()
const port = 3000
var root_path = path.dirname(require.main.filename)

app.use(express.json())

clinics.buildArrayOfClinics()

app.get('/', function(request, response){
    response.send("Clinics Search")
});

app.post('/search', function(request, response){
  
  response.send(clinics.searchClinics(request.body));    // echo the result back
});


app.listen(port, () => {

  console.log(`Clinics app listening at ${port}`)
})

module.exports = app
