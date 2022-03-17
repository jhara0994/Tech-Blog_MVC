const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

// GET all blog posts
router.get('/', async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            include: [User],
        })

        const posts = blogData.map((post) => post.get({ plain: true }))

        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id'],
                },
                {
                    model: Comment,
                    attributes: ['id, description, post_date, user_id,']
                },
            ],
        })

        if (blogData) {
            const post = blogData.get({ plain: true });
      
            res.render('blog-post-single', { post });
          } else {
            res.status(404).end();
          }
        } catch (err) {
          res.status(500).json(err);
        }
})

// router.get('/blogData', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: 'password' },
//             include: [{ model: Blog }, { model: Comment }],
//         });

//         const user = userData.get({ plain: true })

//         res.render('blogData', {
//             ...user,
//             loggedIn: true
//         })
//     }   catch (err) {
//         res.status(500).json(err)
//     }
// })

//GET route for login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }

    res.render('login')
})

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  

module.exports = router