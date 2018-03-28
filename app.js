const db = require('./models');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','ejs');

//===========
//user
//===========
app.get('/users', (req, res)=>{
  db.User.findAll({})
  .then((user)=>{
    res.render('user.ejs', {user})
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.get('/users/register', (req, res)=>{
  res.render('register-user.ejs', {title: 'Register Form'})
})

app.post('/users/register', (req, res)=>{
  db.User.create({
    name: req.body.name,
    birthday: req.body.birthday,
    height: req.body.height,
    weight: req.body.weight,
    password: req.body.password
  })
})



app.listen(3000)
