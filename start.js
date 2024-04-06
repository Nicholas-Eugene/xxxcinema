const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcrypt');
const port = 3000;
const collection = require("./mongo");
const flash = require('connect-flash');
const session = require('express-session');

app.use(flash())

app.use(express.json()); 

app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
  secret: 'supanika',
  resave: false,
  saveUninitialized: true
}));
/*
app.get('/login', (req, res) => {
    res.render('Login');
})
*/
app.get('/Signup', (req, res) => {
  res.render('Signup',{messages: req.flash()} );
})

app.get('/Signin', (req, res) => {
  res.render('Signin', {messages: req.flash()});
})

app.get('/', (req,res) => {
  res.render('home');
})

app.post("/Signup", async (req, res) => {
  try {
    const data = {
      name: req.body.username,
      email: req.body.email,
      password: req.body.password
    };
    const name = data.name; 

    const existingUser = await collection.findOne({name});
    if (existingUser) {
      req.flash('error', 'A user with that username already exists');
      return res.redirect('/Signup');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const newUser = new collection({
      name: data.name,
      email: data.email,
      password: hashedPassword
    });

    await newUser.save();
    res.redirect('/Signin');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal server error');
  }
});


app.post("/Signin", async (req, res) => {
  try {
    const user = await collection.findOne({ name: req.body.username });
    if (!user) {
      req.flash('error', 'Username does not exist');
      return res.redirect('/Signin');
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
      req.flash('error', 'Your password is incorrect, please try again');
      return res.redirect('/Signin');
    }
    
    res.redirect('/');
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Internal server error');
  }
});

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
    console.log(`Server running at http://localhost:${port}`);
})
