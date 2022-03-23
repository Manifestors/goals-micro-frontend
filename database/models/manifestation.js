const { sequelize, connection } = require('../index');


const Manifestation = connection.define('Manifestation', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  belongsTo: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  username: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  mWhat: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  mHow: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  mTimeFrame: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  sMsgs: {
    type: sequelize.DataTypes.JSON,
    allowNull: false,
    unique: false
  }
});

Manifestation.sync({ force: true })
  .then(() => {
    console.log('Recreated table: Manifestation');
  });


module.exports = Manifestation;
