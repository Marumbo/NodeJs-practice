const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes')

// express app
const app = express();


//db connet mondo

const dbURI ='mongodb+srv://testUser:2TestUser@node-practice.4fa5l.mongodb.net/node-tut?retryWrites=true&w=majority'
mongoose.connect(dbURI)
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
