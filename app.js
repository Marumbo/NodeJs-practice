const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes')

require('dotenv').config();
// express app
const app = express();


//db connet mondo


mongoose.connect(process.env.dbURI)
.then((result)=>{
    console.log('connected to db!')
    console.log('Started server on port 4000!')
    app.listen(4000);
})
.catch((err)=> console.log(err));

// listen for requests


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

//making use have asses to assets and static files ofr css and the like
app.use(express.static('public'));

//making body have form data from url post
app.use(express.urlencoded({extended:true}))


app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
// getting and saving from db



app.get('/', (req, res) => {
  
    console.log("redirect home")
    res.redirect('/blogs')

  //res.render('index', { title: 'Home', blogs });
});


app.use('/blogs', blogRouter)

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
