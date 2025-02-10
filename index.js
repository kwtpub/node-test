const path = require('path')
const fs = require('fs')

//fs.mkdir(path.resolve(__dirname,'dir'), (err) => {

   // if(err) {
    //    console.log(err)
   //     return
   // }
 //  console.log('Папка создана')
//})

const fullparse = path.join( __dirname,'first','second')

console.log(path.parse(fullparse))