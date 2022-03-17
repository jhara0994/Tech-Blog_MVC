const router = require('express').Router();
const { Blog } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        where: {
          userId: req.session.userId,
        },
      });
  
      const posts = blogData.map((post) => post.get({ plain: true }));
  
      res.render('dash-posts', {
        layout: 'dash',
        posts,
      });
    } catch (err) {
      res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
      layout: 'dash',
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id);
  
      if (blogData) {
        const post = blogData.get({ plain: true });
  
        res.render('edit-post', {
          layout: 'dash',
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
});

module.exports = router
  
