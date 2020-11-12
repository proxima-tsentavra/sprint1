// Считаем файл script.js и выведем его в консоль
const fs = require('fs');
 
const text = fs.readFileSync('.\\sprint1\\node\\script.js', 'utf8');
console.log(text);
 