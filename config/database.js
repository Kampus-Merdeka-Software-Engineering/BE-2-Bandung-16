const mysql = require('mysql2/promise');

const connectionPool = mysql.createPool({
    uri: process.env.DB_HPL || 'mysql://root:password@localhost:3306/Blue_Horizon'
})


module.exports = {connectionPool}; 