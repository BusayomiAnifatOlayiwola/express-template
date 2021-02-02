const express = require('express')
const app = express()
const ejs = require('ejs')


//view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    const superBowlObject ={
        tom: 'Tom Brady',
        patrick: 'patrick Mahomes'
    }
    res.render('index.ejs', superBowlObject)
})
app.get('/position', (req, res) =>{
    const positionArray = ['quater', 'running', 'wide']
       console.log('hi') 
    res.render('position.ejs', { positionArray })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})