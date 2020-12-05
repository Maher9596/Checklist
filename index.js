const express = require('express')
const app = express()
const PORT = 1234
// THIS LINE IS SOLVING THE ISSUE OF EXPRESS NOT KNOWING WHERE TO FIND THE STATIC FILES 
// NOW IT KNOWS THAT IT SHOULD FIND THEM IN A DIRECTORY "PUBLIC"
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/login', async (req, res) => {
    try {
        res.render('pages/login.ejs')
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, () => console.log(`listening on ${PORT}`))
