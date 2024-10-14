// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//      dialect:'sqlite',
//      storage:'./db/database.sqlite'
// });
// // try {
// //      await sequelize.authenticate();
// //      console.log('Connection has been established successfully.');
// //    } catch (error) {
// //      console.error('Unable to connect to the database:', error);
// //    }

// //    module.exports = {DataType :Sequelize.DataType, sequelize};

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });

// module.exports = { DataTypes:Sequelize.DataTypes, sequelize };
let sq = require('sequelize');

const sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

module.exports = {DataTypes : sq.DataTypes, sequelize}