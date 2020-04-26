'use strict';
require('dotenv').config();
const express = require('express');
 const PORT=process.env.PORT || 3000;
const app = express();
const pg =require('pg');
app.listen(PORT)

const client = new pg.Client(process.env.DATABASE_URL);
const superagent = require('superagent');
const methodOverride = require('method-override')
// app.use

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public')); 
app.set('view engine', 'ejs');

//app.get 
app.get('/', function (req, res) { 
    res.send('Hello World!');
  });

app.get('/', (req, res ) => {
    let SQL = 'SELECT * FROM digimons ';
   let sqldi ;
   client.query(SQL) 
   .then (data => {
       sqldi.rows.length;
       res.render('./index.ejs')
   })

})


function Digimon(val) {
 name = val.name;
 img = val.img ;
 level =val.level;
}






client.connect()
.then (() =>{
app.listen(PORT, () => {
    console.log('listening from port ',PORT);
});
});