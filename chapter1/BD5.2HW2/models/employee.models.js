const { sequelize, DataTypes } = require('../lib/index');

const Employees = sequelize.define('employee', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    department: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    designation: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = { Employees };
