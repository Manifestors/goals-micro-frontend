const sequelize = require('sequelize');


const connection = new sequelize.Sequelize(
  `${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: 'localhost',
    dialect: `${process.env.DB_DIALECT}`
});

connection.authenticate()
  .then(() => {
    console.log(`Connected To Database: ${process.env.DB_NAME}`);
    return;
  })
  .catch((error) => {
    console.log(error);
    return;
  });


module.exports = {
  sequelize,
  connection
};
