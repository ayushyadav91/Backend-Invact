
const { validateRequestBody, validateEmail, validateUsername } = require('../validation/userValidators'); // Assuming you are using Sequelize

const createNewUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        // Validate request body
        validateRequestBody(req.body);
        validateUsername(username);
        validateEmail(email);

        // Check if user already exists
        const userExists = await doesUserExist(email);
        if (userExists) {
            return res.status(400).json({ message: 'The email you provided already exists.' });
        }

        // Create new user
        const user = await createUser({ username, email });

        return res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        // Handle validation errors or internal errors
        const statusCode = error.status || 500;
        return res.status(statusCode).json({ message: error.message });
    }
};

module.exports = { createNewUser };
