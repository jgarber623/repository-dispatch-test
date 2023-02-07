console.log('Parsing inbound client payload...');

process.argv.each(value => {
  return console.log(JSON.parse(value));
});
