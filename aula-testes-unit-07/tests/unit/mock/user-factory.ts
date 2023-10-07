import { faker } from "@faker-js/faker";
import { Level } from "@prisma/client";

function randomUserInfo() {
  return {
    id: faker.number.int({min: 1, max: 20}),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    licenseId: faker.string.numeric({length: 8})
  }
}

function randomInfraction(userId: number) {
  return {
    userId,
    date: faker.date.past(),
    cost: faker.number.int({ min: 100, max: 1000 }),
    level: randomInfractionLevel(),
    description: faker.lorem.words({min: 5, max: 20})
  }
}

function randomInfractionLevel(): Level {
  const levels = ["LIGHT", "MEDIUM", "SEVERE", "VERY_SEVERE"];
  const random = Math.floor(Math.random() * levels.length);
  return levels[random] as Level;
}

export function createRandomUser() {
  const user = randomUserInfo();
  const infractions = [];
  const numberOfInfractions = Math.floor(Math.random() * 5) + 1;
  for (let i = numberOfInfractions; i > 0; i--) {
    infractions.push(randomInfraction(user.id))
  }
  return {
    ...user,
    infractions
  }
}
