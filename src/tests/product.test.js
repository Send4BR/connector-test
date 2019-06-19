const Product = require('../models/product');

const product = new Product({
  id: '29791690',
  name: 'Foo T-shirt',
  sku: '42EVZR5ZP',
  qty: 3,
  price: 70,
  selling_price: 60,
  weight: 0.6,
  categories: [
    'male',
    'summer-collection',
    't-shirts',
  ],
  image_url: 'https://foo.bar/product-img/29791690.jpeg',
});

test('Test Product model', () => {
  expect(product).toBeInstanceOf(Product);
});
