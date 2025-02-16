const Emitter = require('events')


const emitter = new Emitter

emitter.once('message', (data,second,third) => { 
    console.log('Вы прислали сообщение ' + data)
    console.log("Второй аргумент " + second)

})

emitter.removeAllListeners()


// const MESSAGE = process.env.message || ''; 

// if(MESSAGE) { 
//     emitter.emit('message', MESSAGE, 123)
// } else { 
//     emitter.emit('message', 'соо не указано')
// }