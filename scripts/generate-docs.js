const fs = require('fs');
const path = require('path');

// Combine the content from both files
const content = `
// docs/101/testing
${fs.readFileSync(path.join(__dirname, '../docs/101/testing'), 'utf8')}

// app script.js
${fs.readFileSync(path.join(__dirname, '../app script.js'), 'utf8')}
`;

// Write to a new file
fs.writeFileSync(path.join(__dirname, '../documentation.txt'), content); 