
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'bwwuigbix2dg4glio1gr-mysql.services.clever-cloud.com',
  user: 'uwmawbdf35w6bszp',
  password: 'JaNdG3xbYbxcutwq1hfw',
  database: 'bwwuigbix2dg4glio1gr',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
