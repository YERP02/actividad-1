const express = require('express')
const app = express()
const port = 3010

const helados = [
    {id:1, nombre: "vanilla"},
    {id:2, nombre: "Chocolate"},
    {id:3, nombre: "Cafe"}
]

app.get('/', (req, res) => {
  res.send(helados)
})

app.post('/test', (req, res) => {
    const {id, name} = req.query;
    helados.push({id, name});
    res.status(200).send({id,name});
})

/*app.get('/', (req, res) => {
    const {id_n, name_n} = req.query;
    const modificar = helados.find(id_n = helados.id);
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})