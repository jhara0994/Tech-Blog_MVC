const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogSeed = require('./blogData.json');
const commentSeed = require('./commentData.json');
const posts = []

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  for (const post of blogSeed) {
    post.push(await Blog.create ({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    }))
  }

  for (const comment of commentSeed) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: posts[Math.floor(Math.random() * users.length)].id,
    })
  }


  process.exit(0);
};

seedAll();