const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogSeed = require('./blogData.json');
const commentSeed = require('./commentData.json');
const posts = []

const seedAll = async () => {
  console.log ('\n ********** SEEDING ********** \n')
  
  // await sequelize.sync({ force: true });

  console.log ('\n ********** DATABASE SYNCED ********** \n')

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  console.log ('\n ********** USERS SEEDED ********** \n')

  for (const post of blogSeed) {
    posts.push(await Blog.create ({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    }))
  }

  console.log ('\n ********** BLOGS SEEDED ********** \n')

  // for (const comment of commentSeed) {
  //   await Comment.create({
  //     ...comment,
  //     //user_id: users[Math.floor(Math.random() * users.length)].id,
  //     blog_id: posts[Math.floor(Math.random() * users.length)].id,
  //   })
  // }

  console.log ('\n ********** COMMENTS SEEDED ********** \n')

  process.exit(0);
};

seedAll();