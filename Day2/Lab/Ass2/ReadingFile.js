const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('lines.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line: ${line}`);
});

rl.on('close', () => {
  console.log('File has been read!');
});
