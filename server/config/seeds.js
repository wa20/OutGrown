const db = require('./connection');
const User = require('../models/User');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    username: 'freddieb12345',
    email: 'freddiebrewin@live.com',
    password: 'password12345',
  });


  console.log('users seeded');

  process.exit();
});
