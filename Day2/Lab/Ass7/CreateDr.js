const fs = require('fs');

const dirPath = './newCreatedDir';

fs.mkdir(dirPath, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory created successfully!');
  }
});
