// import fs from 'fs';
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

import fs from "fs";
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);