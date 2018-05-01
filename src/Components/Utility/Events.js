const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

export const event = new MyEmitter();

event.setMaxListeners(1000);