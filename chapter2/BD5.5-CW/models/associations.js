// associations.js
const { User } = require('./user.model');
const { Track } = require('./track.model');
const { Like } = require('./like.model');

// Set associations
User.hasMany(Like, { foreignKey: 'userId', onDelete: 'CASCADE' });
Track.hasMany(Like, { foreignKey: 'trackId', onDelete: 'CASCADE' });
Like.belongsTo(User, { foreignKey: 'userId' });
Like.belongsTo(Track, { foreignKey: 'trackId' });

module.exports = { User, Track, Like };
