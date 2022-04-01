const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all blog posts
router.get('/', async (req, res) => {
    try{
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                },
            ]
        })

        const posts = blogData.map((posts) => posts.get({ plain: true }))

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', withAuth, async (req, res) => {
    try{
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'commentor', 'date_created', 'user_id']
                },
            ],
        })

        const blog = blogData.get({plain:true})

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/dash', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: 'password' },
            include: [{ model: Blog }, { model: Comment }],
        });

        const user = userData.get({ plain: true })

        res.render('dash', {
            ...user,
            loggedIn: true
        })
    }   catch (err) {
        res.status(500).json(err)
    }
})

router.get('/createPost', withAuth, async (req, res) =>{
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model: Blog }, { model: Comment }]
        })
        const user = userData.get({plain: true})

        res.render('createPost', {
            ...user,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/comment/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: { model: Blog }
        })

        const user = userData.get({plain: true})

        res.render('addComment', {
            ...user,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



//GET route for login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dash')
        return
    }

    res.render('login')
})

// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('signup');
//   });
  

module.exports = router