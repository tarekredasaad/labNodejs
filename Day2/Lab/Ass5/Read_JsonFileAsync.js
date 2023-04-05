const fs = require('fs');

fs.readFile('JsonData.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
