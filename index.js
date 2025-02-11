const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const fs = require('fs')

// fs.mkdir(path.resolve(__dirname,'dir','dir3','dir2'), (err) => {

//     if(err) {
//        console.log(err)
//       return;
//     }
//    console.log('Папка создана')
// })

const fullparse = path.join( __dirname,'first','second')

console.log(path.parse(fullparse))

// console.log(process.pid)
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)
// console.log(process.argv)

const siteUrl = 'http://localhost:8080/users?id=5123'

const url = new URL(siteUrl)
console.log(url)