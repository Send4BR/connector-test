const SKU = require('../models/sku');

const sku = new SKU({
  sku: 'T123REDS',
  name: 'Small Red T-Shirt',
  image: 'https://foo.bar/product-img/T123REDS.jpeg',
  grid: {
    Color: 'red',
    Size: 's',
  },
});

test('Test SKU model', () => {
  expect(sku).toBeInstanceOf(SKU);
});
