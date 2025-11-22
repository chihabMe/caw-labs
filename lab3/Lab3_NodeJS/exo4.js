// Task 4 - exo4.js
// Create and write content to a file using command-line parameters
// Version 3: Custom filename + display file contents after saving

const fs = require('fs');
const fileName = process.argv[2];
const text = process.argv[3];

if (!fileName || !text) {
    console.log('Usage: node exo4.js <filename> <text>');
    console.log('Example: node exo4.js destination.txt "Coding for fun, that\'s my motto!"');
    process.exit(1);
}

try {
    // Write the file
    fs.writeFileSync(fileName, text);
    console.log('The file has been saved!');
    
    // Display file contents after saving
    const savedContent = fs.readFileSync(fileName, 'utf8');
    console.log('File contents:');
    console.log(savedContent);
} catch (err) {
    console.error('Error:', err.message);
}
