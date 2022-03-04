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
                    attributes: { exclude: ['password'] },
                },
                {
                    model: Comment,
                    attributes: ['description, post_date, user_id,']
                },
            ],
        })

        const post = blogData.map((post) => post.get({ plain: true }))

        res.render('homepage', {
            post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', async (req, res) => {
    try{
        const blogData = await Blog.findByPk({
            include: [
                {
                    model: User,
                    attributes: 'name',
                },
                {
                    model: Comment,
                    attributes: ['description, post_date, user_id,']
                },
            ],
        })

        const post = blogData.get({ plain: true })

        res.render('post', {
            ...post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/blogData', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: 'password' },
            include: [{ model: Blog }, { model: Comment }],
        });

        const user = userData.get({ plain: true })

        res.render('blogData', {
            ...user,
            loggedIn: true
        })
    }   catch (err) {
        res.status(500).json(err)
    }
})

//GET route for login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/blogData')
        return
    }

    res.render('login')
})

module.exports = router