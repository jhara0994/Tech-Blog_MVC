const router = require('express').Router();
const { Blog, Comment } = require('../../models');

// // GET all blog current blog posts
// router.get('/', async (req, res) => {
//     try {
//         const dbBlogData = await Blog.findAll({
//             include: [{ model: Comment }],
//         })
//         res.status(200).json(dbBlogData);
//     }   catch (err) {
//         res.status(500).json(err);
//   }
// })

// // GET blog posts by ID
// router.get('/:id', async (req, res) => {
//   // find one category by its `id` value
//   try {
//     const dbBlogData = await Blog.findByPk(req.params.id, {
//       // including comments with blog posts.
//       include: [{ model: Comment }],
//     });

//     if (!dbBlogData) {
//       res.status(404).json({ message: 'No blog post found with that id!' });
//       return;
//     }

//     res.status(200).json(dbBlogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// CREATE new blog post
router.post('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
          title: req.body.title,
          user: req.body.user,
          user_id: req.body.user_id,
          post_date: req.body.post_date,
          blog_id: req.body.blog_id,
          description: req.body.description,
        });
    
        res.status(200).json(dbBlogData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

// Update/edit a blog post. - needs work
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  const dbBlogData = await Blog.update(req.body, {
      where: {
        description: req.params.id,
      },
    })

    if (!dbBlogData) {
      res.status(404).json({ message: 'No blog post found with that ID!' })
      return
    }
    res.status(200).json(dbBlogData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;