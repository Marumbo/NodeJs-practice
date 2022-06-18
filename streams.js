const fs = require('fs')

const readStream = fs.createReadStream('./agricultural work.csv')

const writeStream = fs.createWriteStream('./blogs/blog2.txt')

readStream.on('data',(chunk)=>{
    console.log('New chunk')
    console.log(chunk.toString())
    writeStream.write('\n New chunk \n')
    writeStream.write(chunk)
})

