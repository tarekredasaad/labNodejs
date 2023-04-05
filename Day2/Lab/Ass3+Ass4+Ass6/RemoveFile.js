const fs = require('fs');

fs.unlink('info.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully.');
});
