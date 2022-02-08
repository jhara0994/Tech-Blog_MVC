const sequelize = require('../config/connection');
const blogSeed = require('./blogData');
const commentSeed = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await blogSeed();

  await commentSeed();

  process.exit(0);
};

seedAll();