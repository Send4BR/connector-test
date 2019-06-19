const Grid = require('../models/grid');

const grid = new Grid({
  Color: [
    'red',
    'blue',
  ],
  Size: [
    's',
    'm',
    'l',
  ],
});

test('Test Grid model', () => {
  expect(grid).toBeInstanceOf(Grid);
});
