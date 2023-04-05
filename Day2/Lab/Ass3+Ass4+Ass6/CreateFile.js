const fs = require('fs');

const data = 'This is some dummy data from Mahmoud Essm Salem.';
fs.writeFile('test.txt', data, (err) => {
  if (err) throw err;
  console.log('File created and data written to it.');
});


  