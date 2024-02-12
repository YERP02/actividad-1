const express = require('express')
const app = express()
app.use(express.json())
const port = 3010

const helados = [
    {id:1, nombre: "vanilla"},
    {id:2, nombre: "Chocolate"},
    {id:3, nombre: "Cafe"}
]

app.get('/helados', (req, res) => {
  res.send(helados)
})

app.post('/helados', (req, res) => {
    const {id, nombre} = req.body;
    helados.push({id, nombre});
    res.status(200).send({id,nombre});
})


app.get('/helados/:id', (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    const heladoEncontrado = helados.find((h) => h.id == id);
    res.send(heladoEncontrado);
})

app.patch('/helados/:id', (req, res) => {
    const {id} = req.params;
    const heladoEncontrado =helados.find((bus) => bus.id ==id );
    const {nombre} = req.body;
    heladoEncontrado = nombre
    //const {nombre} = req.body;
    res.send(heladoEncontrado);
})

app.delete('/helados/:id', (req, res) => {
    const {id} = req.params;
    const heladoEncontrado =helados.pop((del) => del.id == id);
    res.send(heladoEncontrado);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})