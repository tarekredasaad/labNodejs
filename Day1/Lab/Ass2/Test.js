const Info = require('./GetInfo');

try {
  console.log(Info.GetINFOO('Mahmoud', '1996-02-12'));  
  console.log(Info.GetINFOO('Sarah', '2001-09-21')); 
  console.log(Info.GetINFOO('Essam', '2025-05-02'));  
} catch (error) {
  console.error(error);
}
