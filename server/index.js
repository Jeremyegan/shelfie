require('dotenv').config()
const express = require('express')  
const massive = require('massive')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB SET!')
    console.log(db.listTables())
})

app.get('/api/inventory', (req, res) => {
    req.app
    .get('db')
    .getAllProductsf()
    .then((inventory) => {
        res.status(200).send(inventory)
    })
})

app.post('/api/inventory', (req, res) => {
    const { name, price, img } = req.body
    req.app.get('db')
    .createProduct([ name, price, img])
    .then(() => {
        res.status(200).send('User created!')
    })
})

app.delete('/api/inventory/:id', (req, res) => {
    const { id } = req.params
    req.app
    .get('db')
    .deleteProduct(id)
    .then(() => {
        res.status(200).send('Product deleted from database')
    })

})






app.listen(SERVER_PORT, () => console.log(`magic is happening on ${SERVER_PORT}`))