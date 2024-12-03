const { User } = require('../models'); // Assuming you are using Sequelize

const doesUserExist = async (email) => {
    const user = await User.findOne({ where: { email } });
    return !!user; // Returns true if user exists, false otherwise
};


const createUser = async (userData) => {
    return await User.create(userData);
};


module.exports = { doesUserExist, createUser };
