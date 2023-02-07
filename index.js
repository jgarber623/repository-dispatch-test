const process = require('node:process');

console.log('Parsing inbound client payload...');

console.log(process.argv);

process.argv.each(value => {
  return console.log(JSON.parse(value));
});
