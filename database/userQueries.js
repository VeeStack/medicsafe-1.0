
const db = require('./db');
// Example Sequelize model for the User table

const Sequelize = require('./sequelize'); // Your Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

exports.getUserByUserId = async (userId) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE userId = ?', [userId]);
  return rows[0];
};

module.exports = User;
