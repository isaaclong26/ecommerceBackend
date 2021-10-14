require('dotenv').config({ path: require('find-config')('.env') })
const Sequelize = require('sequelize');

console.log(process.env.DB_NAME)

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
       logging: false,
      dialectOptions: {
        decimalNumbers: true,
      },
     
    });





async function test(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  test();
  
  
  
  
  module.exports = sequelize;