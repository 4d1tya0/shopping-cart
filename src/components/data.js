import { faker } from "@faker-js/faker";

const list = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    author: faker.commerce.productAdjective(),
    price: faker.commerce.price(),
    img: faker.image.image(),
    amount:1,
  }));

  export default list;