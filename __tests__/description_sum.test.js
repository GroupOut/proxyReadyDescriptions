// const mysql = require('mysql'); // this has already been referenced
const sum = require('../sum');
// const connection = require('../db/index.js');
// console.log(connection); // module found

// const getRecCount = callback => {
//   connection.query('SELECT 1', (err, success, f) => {
//     if (err) {
//       console.log('Failed to connect with database');
//     } else {
//       callback(() => {
//         return 'peanut butter';
//       });
//     }
//   });
// };

// getRecCount(s => console.log(s));
// // getRecCount(data => console.log(data));

// connection.end();

// test suite
// Simple Starter Test
// from https://jestjs.io/docs/en/getting-started
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Async test attempted to be aligned with a db query
// from https://jestjs.io/docs/en/asynchronous
// test('the data is peanut butter', done => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//     done();
//   }
//   getRecCount(callback);
// });
