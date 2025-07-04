const EventEmitter=require('events')
var e2=new EventEmitter()
e2.on('my1',function(){
    console.log('my1 event emitter')
})
e2.emit('my1')