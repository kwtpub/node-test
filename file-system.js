const fs = require('fs')
const path = require('path')

// console.log('START')

// fs.mkdir(path.resolve(__dirname,'dir','dir3','dir2'),(err) => {

//     if(err) {
//        console.log(err)
//       return;
//     }
//    console.log('Папка создана')
// })

// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), '43 sdfsdf 7dfg 6 ываыв 4', (err) => {
//     if(err) {
//         throw err;

//     }
//     console.log('файл записан')
// } )

// fs.appendFile(path.resolve(__dirname, 'text.txt'), 'ДОБАВИЛИ В КОНЕЦ', (err) => {
//     if(err) {
//         throw err;

//     }
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'ДОБАВИЛИ В КОНЕЦ', (err) => {
//         if(err) {
//             throw err;
    
//         }
//         console.log('Файл записан')
//     })
// })

const writeFileAsync = async (path,data) => { 
    return new Promise((resolve, rejects) => fs.writeFile(path, data, (err) => { 
        if(err) {
            return rejects(err.message)
        } 
        resolve()

    }))
}

const appendFileAsync = async (path,data) => { 
    return new Promise((resolve, rejects) => fs.appendFile(path, data, (err) => { 
        if(err) {
            return rejects(err.message)
        } 
        resolve()

    }))
}

writeFileAsync(path.resolve(__dirname,  'text.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'456'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'789'))
    .catch(err => console.log(err))