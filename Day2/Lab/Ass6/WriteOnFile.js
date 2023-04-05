const fs = require('fs');

fs.writeFile('info.txt', 'hello ITI From El 3ooss', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
