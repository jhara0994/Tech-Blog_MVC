const { Comment } = require('../models');

const commentData = [
  {
    user: 'LadyUx',
    user_id: 3,
    post_date: 'February 10, 2022',
    blog_id: 2,
    description:
      'Learning the difference between authorization and authentication is crucial to understand to be a quality developer.',
  },
  {
    user: 'SirTechie',
    user_id: 2,
    post_date: 'December 05, 2021',
    blog_id: 3,
    description: 
        'Handlebars is one of the most functional tools I have found and love having it in me repertoire.',
  },
  {
    user: 'JavaMan',
    user_id: 1,
    post_date: 'January 10, 2022',
    blog_id: 1,
    description: 
        'MVC has helped me greatly in my career, and I suggest all developers learn this framework.',
  },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
