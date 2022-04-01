const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth')

// CREATE new blog post

router.post('/', async (req, res) => {
  try {
    const newBlogData = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
    });
        res.status(200).json(newBlogData);
      } catch (err) {
        res.status(500).json(err);
      }
})

// Update/edit a blog post. - needs work
// router.put('/:id', withAuth, async (req, res) => {
//   // update a category by its `id` value
//   try {
//   const dbBlogData = await Blog.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id
//       },
//     })

//     if (!dbBlogData) {
//       res.status(404).json({ message: 'No blog post found with that ID!' })
//       return
//     }
//     res.status(200).json(dbBlogData).end()
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

// only route not working right now. 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbBlogData = Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!dbBlogData) {
      res.status(404).json({ message: 'No blog post found with that ID!' })
      return
    }
    res.status(200).json(dbBlogData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;