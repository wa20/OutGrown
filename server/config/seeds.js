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

      name: 'Panda Comforter',
      description:
        'Toy panda blanket comforter',
      image: 'toys-panda-comforter.jpg',
      category: categories[0]._id,
      price: 10.99,
    },
    {

      name: 'Bath Toy Cups',
      description:
        'Set of bath toys',
      image: 'bath-toy.jpg',
      category: categories[0]._id,
      price: 5.99,
    },
    {

      name: 'Wildly Adventures Educational Toy - Jangly Lion',
      description:
        "Bring out baby's wild side with these sensory toy",
      image: 'toys-lion.jpg',
      category: categories[0]._id,
      price: 16,
    },

    {

      name: 'Skip Hop - Fox Xylophone',
      description:
        "Inspires early musical creativity with eight colorful keys",
      image: 'toys-fox-xylophone.jpg',
      category: categories[0]._id,
      price: 20,
    },

    {

      name: 'Skip Hop Fox Bandana Buddy',
      description:
        "Baby will love this soft toy and teether toy filled with textures, patterns and sounds.",
      image: 'toys-fox.jpg',
      category: categories[0]._id,
      price: 18,
    },

    {

      name: 'Skip Hop Elephant Bandana Buddy',
      description:
        "Baby will love this soft toy and teether toy filled with textures, patterns and sounds.",
      image: 'toys-elephant.jpg',
      category: categories[0]._id,
      price: 18,
    },

    {

      name: 'Skip Hop Zoo Light Up Toy - Dino',
      description:
        "Brighten-up bath time with a cute ZOO® friend! Featuring water-activated multicolour lights, this soft and squeezable bath toy is sure to make a splash with your little one!",
      image: 'toys-dino.jpg',
      category: categories[0]._id,
      price: 9,
    },

    {

      name: 'Hey Sunshine Educational Toy - Linkie Octopus',
      description:
        " interactive Octopus Linkie soft toy is perfect for keeping little ones entertained while out and about.",
      image: 'toys-octopus.jpg',
      category: categories[0]._id,
      price: 8,
    },

    {

      name: 'Joie Dreamer Baby Rocker - Starry Night',
      description:
        "A cosy cradler comforts baby from newborn on. Compact frame and handy extras make for a soothing solution at home or on-the-go.",
      image: 'dreamer-rocker.jpg',
      category: categories[3]._id,
      price: 75 ,
    },

    {
      name: 'Welcome to the World 6 Piece Set - Sand',
      description:
        "Welcome to the World newborn clothing collection is full of adorable outfits that are perfect for making first impressions.",
      image: 'outfits-6-piece.jpg',
      category: categories[1]._id,
      price: 25,
    },

    {
      name: 'Mock Romper With Bird Print Shirt & Braces',
      description:
        "Get your little one dressed to impress with our stunning collection of occasion wear",
      image: 'romper.jpg',
      category: categories[1]._id,
      price:14.50 ,
    },


    {
      name: 'Giraffe Print Baby Sleepsuit Multipack - Set Of 3',
      description:
        "Made from beautifully soft jersey cotton thatll be kind to babys skin, our Basics collection is perfect for stocking up on wardrobe staples.",
      image: 'giraffe-sleepsuits.jpg',
      category: categories[1]._id,
      price: 13.20,
    },


    {
      name: 'Welcome to the World Soft Toy - Geoffrey Giraffe',
      description:
        "Welcome to the World toy and gift collection is full of reassuringly soft and friendly characters your child is sure to love. Our bestselling range embraces super soft faux fur for a luxury feel that's perfect for cuddles.",
      image: 'toys-giraffe.jpg',
      category: categories[0]._id,
      price: 16 ,
    },

    {
      name: 'Airo Pushchair - Mint',
      description:
        "Super slim and lightwieght travel stroller",
      image: 'pushchair-mint.jpg',
      category: categories[2]._id,
      price: 399,
    },
    {
      name: 'Airo Pushchair - Black',
      description:
        "Super slim and lightwieght travel stroller",
      image: 'pushchair-black.jpg',
      category: categories[2]._id,
      price: 399,
    },
    {
      name: 'Baby Snug and Activity Tray - Dusky Rose',
      description:
        "Baby Snug is a supportive seat that helps little ones get accustomed to sitting up on their own.",
      image: 'floor-seating.jpg',
      category: categories[3]._id,
      price: 55,
    },
    {
      name: 'Snax Highchair - Alphabet Floral',
      description:
        "Keep mealtimes comfortable with the Mamas & Papas Snax highchair.",
      image: 'highchair.jpg',
      category: categories[1]._id,
      price: 85,
    },
    // {
    //   name: '',
    //   description:
    //     "",
    //   image: '',
    //   category: categories[1]._id,
    //   price: ,
    // },


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
