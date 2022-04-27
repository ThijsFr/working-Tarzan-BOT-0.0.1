module.exports = client => {
console.log('EXPORTS READY'.bgBlack)
  //exports\\

require('./EXPORTED/translate')(client);
require('./EXPORTED/random')(client);

  
}//Possible EventEmitter memory leak detected. 11 message listeners added to 
