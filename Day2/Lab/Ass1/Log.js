// var Emitter = require('events');
// var emtr = new Emitter();

// emtr.on('El3ooss', function(){
//   console.log('Hello Essam')
// })
// emtr.on('El3ooss', function(){
//   console.log('Hello Essam 2')
// })

// console.log('--------------')
// emtr.emit('El3ooss')  


//------------------------------------------------
var EventEmitter = require('events');
var util = require('util');

function Hello() {
	EventEmitter.call(this);
	this.Say = 'Hello world!';
}

util.inherits(Hello, EventEmitter);

Hello.prototype.greet = function(data) {
	console.log(this.Say + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Hello();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Essam');