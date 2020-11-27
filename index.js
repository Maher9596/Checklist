const express = require('express')
const app = express()
const PORT = 1234

app.set('view engine', 'ejs');

app.get('/login', async (req, res) => {
    try {
        res.render('pages/login.ejs')
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, () => console.log(`listening on ${PORT}`))