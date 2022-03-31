const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth')

// CREATE new blog post
router.post('/', withAuth, async (req, res) => {

  const body = req.body

    try {
        const newBlogData = await Blog.create({
          ...body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newBlogData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

// Update/edit a blog post. - needs work
router.put('/:id', withAuth, async (req, res) => {
  // update a category by its `id` value
  try {
  const [dbBlogData] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!dbBlogData) {
      res.status(404).json({ message: 'No blog post found with that ID!' }).end()
      return
    }
    res.status(200).json(dbBlogData).end()
  } catch (err) {
    res.status(500).json(err)
  }
})

// only route not working right now. 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [dbBlogData] = Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!dbBlogData) {
      res.status(404).json({ message: 'No blog post found with that ID!' }).end()
      return
    }
    res.status(200).json(dbBlogData).end()
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;