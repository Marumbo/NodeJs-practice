// blog_index, blog_details, blog_create_get, blog_create_post,blog_delete
const Blog = require('../models/blog');

const blog_index =(req,res)=>{

    Blog.find()
    .then((result)=>{
        console.log("Returning all blogs to home")
        res.render('index',{title:'All blogs', blogs:result});

    })
    .catch((err)=>{
        console.log(err);
    })


}


const blog_details = (req,res)=>{
    const id = req.params.id;

    Blog.findById(id)
    .then((result)=>{
        const blog = result;
        console.log("returning a single blog with id")
        res.render('details', {blog:blog, title:'Blog details'});
    })
    .catch((err)=>{
        console.log(err)

    })
}

const blog_create_get = (req,res)=>{
    res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req,res)=>{
    console.log(req.body)
    const {title, snippet, body} = req.body;
    
     const blog = new Blog({
         title: title,
         body:body,
         snippet:snippet
     })
    
     blog.save()
     .then((result)=>{
         console.log(result)
    
         res.redirect('/');
    
     })
    .catch((err)=>{
        console.log(err)
        
    })


}

const blog_delete = (req,res)=>{
    const id = req.params.id;
        
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });

}
module.exports={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}