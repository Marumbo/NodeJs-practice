const express = require('express')

const { blog_index, blog_details,  blog_create_get, blog_create_post, blog_delete} = require('../controllers/blogController')


const router = express.Router()




// blogs home get

router.get('/',blog_index)


    

// get create blog page
router.get('/create',  blog_create_get);
  

  //get page details of blog with id

  router.get('/:id',blog_details)


// add blog post

router.post('/', blog_create_post)

 router.delete('/:id',blog_delete);
      
   
    

      module.exports = router;