const fs = require('node:fs');
const process = require('node:process');

const message = JSON.parse(process.argv[2]);

if (message.type && message.type.toLowerCase() === 'follow') {
  const follower = message.actor;
  
  console.log(`Processing follow request from ${follower}...`);
  
  const followers = JSON.parse(fs.readFileSync('./followers.json'));
  
  if (followers.includes(follower)) {
    console.log(`${follower} is already a follower. Skipping...`);
  } else {
    console.log('Updating ./followers.json...');
    
    fs.writeFileSync('./followers.json', JSON.stringify(followers.push(follower)));
  }
} else {
  console.log(`Message is of type ${message.type}. Skipping...`);
}
