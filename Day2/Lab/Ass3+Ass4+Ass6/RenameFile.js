const fs = require('fs');

fs.rename('test.txt','info.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
  });