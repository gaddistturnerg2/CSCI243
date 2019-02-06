let Message = require('./function.js');
let Random = require('./function.js');

setInterval (( )=> {
  (Random.getrandom());
},2000);

setInterval(() =>{
console.log(Message.getMessage(Random));
},2000);
