const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

Blog.hasMany(Comment, {
  foreignKey: 'blogData_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blogData_id'
})


module.exports = { User, Blog, Comment };