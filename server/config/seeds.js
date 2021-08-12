const db = require('./connection');
const { User, Product, Category } = require('../models');
const mongoose = require('mongoose')

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Toys',
      image: 'toys-category.jpg',
      description: 'Search our large collection of fun, playful toys to keep your babies entertained',
    },
    {
      name: 'Clothes',
      image: 'clothes-category.jpg',
      description: 'Our clothes section contains a large variety of different items, including bodysuits, shoes, socks and more',
    },
    {
      name: 'Travel',
      image: 'pram.jpg',
      description: 'Make sure your child stays comfy when you travel in our spacious and luxiourious strollers and prams',
    },
    {
      name: 'Nursery',
      image: 'nursery-category.jpg',
      description: 'Buy all the nursery essentials including cribs, mattreses, baby monitors and more',
    },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const paramId = new mongoose.Types.ObjectId()
  console.log(paramId)

  const products = await Product.insertMany([
    {
      //genereated ID manually 
      _id: paramId,
      name: 'Pram',
      description:
        'Slightly used pram',
      image: 'pram.jpg',
      category: categories[2]._id,
      price: 2.99,
    },
    {

      name: 'Bath toys',
      description:
        'Set of toys ideal for bath time',
      image: 'bath-toys.jpg',
      category: categories[0]._id,
      price: 1.99,
    },

    {
      name: 'Knitted shoes',
      description:
        'A pair of pink knitted shoes',
      image: 'knitted-shoes.jpg',
      category: categories[1]._id,
      price: 1.99,
    },

    {
      name: 'Pink shoes',
      description:
        'A pair of pink shoes',
      image: 'pink-shoes.jpg',
      category: categories[1]._id,
      price: 1.99,
    },

    {
      name: 'Play area',
      description:
        'Play area perfect to keep your baby entertained',
      image: 'play-area.jpg',
      category: categories[0]._id,
      price: 1.99,
    },

    {
      name: 'Toy sail boats',
      description:
        'Set of toy sail boats',
      image: 'toy-sail-boats.jpg',
      category: categories[0]._id,
      price: 1.99,
    },
    {
      name: 'White shirt',
      description:
        'White shirt',
      image: 'white-shirt.jpg',
      category: categories[1],
      price: 1.99,
    },
    {
      name: 'White shirt',

      description:
        'White shirt',
      image: 'white-shirt2.jpg',
      category: categories[1]._id,
      price: 1.99,
    },
  ])

  await User.deleteMany();

  await User.create({
    username: 'freddieb12345',
    email: 'freddiebrewin@live.com',
    password: 'password12345',
    // address {
    firstName: "Freddie",
    lastName: "Jeff",
    street: "29 Fade Street",
    townCity: "Fadded City",
    postCode: "FA9 3ED",
    // },
    product: products[2]._id
  });

  await User.create({
    username: 'Jack',
    firstName: 'Jack',
    lastName: 'Jones',
    email: 'jack@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('products seeded');

  console.log('users seeded');

  process.exit();
});
