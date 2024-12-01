const fs = require('fs');

// try {
//   const data = fs.readFileSync('application_log.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error('Error reading file:', err.message);
// }

try {
  const data = fs.readFileSync('application_log.txt', 'utf8');
  console.log('Updated Log File:');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err.message);
}

