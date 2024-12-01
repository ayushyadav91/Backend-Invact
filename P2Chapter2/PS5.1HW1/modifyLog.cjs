const fs = require('fs');

// try {
//   let data = fs.readFileSync('application_log.txt', 'utf8');
//   data = data.replace(
//     'Payment processing taking longer than expected for Order #A1234.',
//     'Payment for Order #A1234 has been processed successfully.'
//   );

//   fs.writeFileSync('application_log.txt', data);
//   console.log('Log file updated successfully.');
// } catch (err) {
//   console.error('Error modifying file:', err.message);
// }


try {
  let data = fs.readFileSync('application_log.txt', 'utf8');
  data = data.replace(/(Order.*)/g, '[parcel] $1');

  fs.writeFileSync('application_log.txt', data);
  console.log('All "Order" log entries updated with "[parcel]".');
} catch (err) {
  console.error('Error modifying file:', err.message);
}

