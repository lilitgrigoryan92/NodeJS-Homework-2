const faker = require('faker');
const _ = require('lodash');

function generateFakeUsers(numUsers) {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    };

    users.push(user);
  }

  return users;
}

const fakeUsers = generateFakeUsers(10);

const sortedUsers = _.sortBy(fakeUsers, 'name');

console.log(sortedUsers);