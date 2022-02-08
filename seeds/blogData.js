const { Blog } = require('../models');

const blogData = [
  {
    title: 'MVC Updates and Information',
    user: 'LadyUx',
    post_date: 'November 30, 2021',
    id: 1,
    description:
      'Model View Controller (MVC) is an important tool for any developer to know and master as it allows for more flexibility and control over the user experience(Ux). MVC helps make our data more dynamic and increase user interactivity.',
  },
  {
    title: 'Authentication, Authorization, and SSO',
    user: 'SirTechie',
    post_date: 'January 05, 2022',
    id: 2,
    description: 
        'Authorization is the process of checking the user input to stored data associated with that user to allow the person into certain areas of your website. If the user input matches the stored data, the user is authorized to use the website or piece of the website. Authorization includes authenticating the user and passing a token so the user can view or use the intended data. SSO involves using the authorization token to authenticate the user through multiple sign-ins so the user can explore and use all of their intended data without having to log in more than once.',
  },
  {
    title: 'How Handlebars Help Handle the UI/UX',
    user: 'JavaMan',
    post_date: 'February 10, 2022',
    id: 3,
    description: 
        'Handlebars assist developers in presenting the user with a pleasant, dynamic interface by breaking the HTML into smaller codes that allow functionality to be installed easier.',
  },
];

const blogSeeds = () => Blog.bulkCreate(blogData);

module.exports = blogSeeds;
