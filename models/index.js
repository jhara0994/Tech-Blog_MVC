const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

Blog.hasMany(Comment, {
  foreignKey: 'blogData_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})


module.exports = { User, Blog, Comment };