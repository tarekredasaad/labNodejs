const fs = require('fs');

try {
  const data = fs.readFileSync('JsonData.json');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (err) {
  console.error(err);
}
