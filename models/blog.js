const { Timestamp } = require('bson');
const { builtinModules } = require('module');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },

},{timestamps:true})


//pluralizes blog to blogs in db.

const Blog = mongoose.model('blog',blogSchema);

module.exports = Blog;