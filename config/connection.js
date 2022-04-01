const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'heroku_2149f8eb2c3beaa',
    'b5ce8f2bfce663',
    '8a7d7405',
    {
      host: 'us-cdbr-east-05.cleardb.net',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;