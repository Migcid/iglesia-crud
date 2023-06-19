const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Miguel')
})

app.listen(port, () => {
    console.log(`Servidor escuchando desde el ${port}`)
})