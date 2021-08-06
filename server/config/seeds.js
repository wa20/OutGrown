const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    username: 'freddieb12345',
    email: 'freddiebrewin@live.com',
    password: 'password12345',
  });

  await Category.deleteMany();
  
  const categories = await Category.insertMany([
    { name: 'Toys' },
    { name: 'Clothes' },
    { name: 'Travel' },
    { name: 'Nursery' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Pram',
      description:
        'Slightly used pram',
      image: 'pram.jpg',
      category: categories[2]._id,
      price: 2.99,
    },
    {
      name: 'Toy blocks',
      description:
        'Set of colourful toy blocks',
      image: 'toy-blocks.jpg',
      category: categories[0]._id,
      price: 1.99,
    },
  ])
  console.log('products seeded');

  console.log('users seeded');

  process.exit();
});
