const User = require('./User');
const Blog = require('./Blog');

Blog.hasMany(Data, {
  foreignKey: 'gallery_id',
});

// Input.belongsTo(Data, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Blog };