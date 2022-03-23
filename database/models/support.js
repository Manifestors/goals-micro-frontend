const { connection, sequelize } = require('./../index');


const Support = connection.define('Support', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  belongsTo: {
    type: sequelize.DataTypes.INTEGER,
    allowNull: false,
    unique: false
  },
  username: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  sMsg: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  }
});

Support.sync({ force: true })
  .then(() => {
    console.log('Recreated Table: Support');
  });


module.exports = Support;
