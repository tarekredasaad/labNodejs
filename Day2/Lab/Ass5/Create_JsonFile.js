const fs = require('fs');

const data = { 
    name: "Mahmoud",
    age: 25,
    city: "Assuit"
};

const jsonData = JSON.stringify(data);

fs.writeFile('JsonData.json', jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("JSON data is saved to data.json file.");
});
