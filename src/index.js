const fs = require("fs");
const path = require("path");
require('colors');

// https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/?ref=lbp

// Create a file
let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python";

//  @writeFile(param1, param2, cb())
// param1 string (file name);
// param2 string | binary | stream line data
// param3 callback function 
const dateObj = new Date();



const yyyy = dateObj.getUTCFullYear();
const mm = dateObj.getMonth() + 1; 
const hh = dateObj.getHours(); 
const min = dateObj.getMinutes(); 
const ss = dateObj.getSeconds(); 
const fileName = `${yyyy}-${mm}-example-${hh}-${min}-${ss}.txt`;
const dirPath = path.join(__dirname, 'temp1', fileName ); 

console.log("pathname", dirPath);
console.log("fileName", fileName);

// Asynchronous Pattern
//  fs.writeFile(dirPath, data, (err) => {
//     if (err) {
//         console.error('Error creating file:', err);
//     } else {
//         console.log('File created successfully.');
//     }
// })

// Synchronous pattern
try {
    fs.writeFileSync(dirPath, data, {flag:'a+'})
    console.log('File created successfully.'.yellow.bold);
}
catch(error){
    console.log("Error", error.message.red.bold)
}



// // Read the file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File content:', data);
// }}
// )

// // Update the file
// const updatedContent = data + '\nAdditional text appended.';
// fs.writeFile('example.txt', updatedContent, (err) => {
//     if (err) {
//         console.error('Error updating file:', err);
//     } else {
//         console.log('File updated successfully.');
// }})

// // Read the updated file
// fs.readFile('example.txt', 'utf8', (err, updatedData) => {
//     if (err) {
//         console.error('Error reading updated file:', err);
//     } else {
//         console.log('Updated file content:', updatedData);
//     }})

        
// // Delete the file
// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully.');
//     }
// });
    
