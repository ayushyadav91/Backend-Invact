const validateRequestBody = (body) => {
     if (!body.username || !body.email) {
         const error = new Error('Both username and email are required.');
         error.status = 400;
         throw error;
     }
 };
 const validateEmail = (email) => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
         const error = new Error('Invalid email format.');
         error.status = 400;
         throw error;
     }
 };

 const validateUsername = (username) => {
     if (typeof username !== 'string' || username.trim().length === 0) {
         const error = new Error('Username must be a non-empty string.');
         error.status = 400;
         throw error;
     }
 };
 
 