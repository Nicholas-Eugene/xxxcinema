const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('home');
})

app.get('/login', (req,res) => {
    res.render('Login');
})

app.get('/SeatConjuring', (req,res) => {
    res.render('SeatConjuring');
})
app.get('/SeatDune', (req,res) => {
    res.render('SeatDune');
})
app.get('/SeatEndgame', (req,res) => {
    res.render('SeatEndgame');
})
app.get('/SeatGodz', (req,res) => {
    res.render('SeatGodz');
})
app.get('/SeatHunter', (req,res) => {
    res.render('SeatHunter');
})
app.get('/SeatMeg', (req,res) => {
    res.render('SeatMeg');
})

app.listen(port,() => {
    console.log('Server running at http://localhost:${port}');
})