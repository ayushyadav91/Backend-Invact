const fs = require('fs');
const timestamp = new Date().toISOString();

const newLogEntry = `[${timestamp}] [INFO] [ShippingModule] Order #A1234 has been shipped.\n`;

fs.appendFile('application_log.txt', newLogEntry, (err) => {
  if (err) {
    console.error('Error appending to file:', err.message);
  } else {
    console.log('Log entry appended successfully.');
  }
});
