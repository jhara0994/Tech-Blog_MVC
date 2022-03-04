const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../utils/auth');

// CREATE new Comment post
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
          post_date: req.body.post_date,
          blog_id: req.body.blog_id,
          comment: req.body.comment,
        });
          res.status(200).json(comment);
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
})

// DELETE a comment
router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })

        if (!comment) {
            res.status(404).json({ message: 'No comment found with this id!' })
            return
        }

        res.status(200).json(comment)
    }   catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router