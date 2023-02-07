const process = require('node:process');

console.log('Parsing inbound client payload...');

process.argv.slice(2).forEach(value => {
  return console.log(JSON.parse(value));
});
