const { Blog } = require('../models');

const blogData = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    exhibition_date: 'November 30, 2021',
    id: 1,
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    post_date: 'January 05, 2022',
    id: 2,
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    artist: 'S_Photo',
    post_date: 'February 10, 2022',
    id: 3,
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
];

const blogSeeds = () => Painting.bulkCreate(blogData);

module.exports = blogSeeds;
