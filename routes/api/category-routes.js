const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product
    }],
  }).then((CategoryData) => {
    res.json(CategoryData);

  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    include: [{
      model: Product
    }],
  }).then((catData) => {
    res.json(catData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCat) => {
      res.json(newCat);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(

      {
        category_name: req.body.category_name
      }, {
        where: {
          id: req.params.id
        }
      }
    )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err)
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
        where: {
          id: req.params.id
        },
      },

    ).then((deletedCategory) => {
      res.json(deletedCategory)
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;