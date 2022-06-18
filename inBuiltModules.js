const fs = require('fs');


//read
/*
fs.readFile('./files/blog1.txt',(err,data)=>{

    if(err){
        console.log(err)
    }

    console.log(data.toString())
})

//non blocking function

console.log("Didnt block!")
*/

//write
/*
fs.writeFile('./files/blog2.txt', 'Hello world test part 2', ()=>{

console.log("File written part 2")

})
*/


//directorys

//fs exists is synchronous so it blocks
/*
if(fs.existsSync('./blogs')){
console.log("Folder already exists")
}else{

    fs.mkdir('./blogs', (err)=>{
        
        if(err){
            console.log(err)
        }
        else{

            console.log("Folder created")
        }
    })
}
    */

//delete files

if(fs.existsSync('./files/blog2.txt')){
fs.unlink('./files/blog2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file deleted')
    }
})

}

