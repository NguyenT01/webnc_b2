const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port= 5000

const fortunes = [

    "Conquer your fears or they will conquer you.",
    
    "Rivers need springs.",
    
    "Do not fear what you don't know.",
    
    "You will have a pleasant surprise.",
    
    "Whenever possible, keep it simple.",
    
]


app.set ('view engine', 'handlebars')
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',    
}))

app.use(express.static(__dirname + '/public'))

app.get('/',(req, res)=> res.render('home'))
app.get('/about',(req, res)=> {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about',{fortune: randomFortune})
})

// custom 404 page
app.use((req, res)=>{
    res.status(404)
    res.render('404')
})

// custom 500 page
app.use((err,req,res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})


// // method
// app.get('/',(req, res)=>{
//     res.type('text/plain')
//     res.send('Web travel')
// })

// app.get('/about',(req, res)=>{
//     res.type('text/plain')
//     res.send('About Web travel')
// })

// // custom 404 page
// app.use((req, res)=>{
//     res.type('text/plain')
//     res.status(404)
//     res.send('404 - Not Found')
// })

// // custom 500 page
// app.use((err, req, res, next)=>{
//     console.error(err.message)
//     res.type('text/plain')
//     res.status(500)
//     res.send('500 - Server Error')
// })



app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; `+
    'press Ctrl-C to terminate.'
))