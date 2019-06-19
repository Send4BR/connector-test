const Customer = require('../models/customer');

const customer = new Customer({
  id: '123',
  email: 'rafael@send4.com.br',
  first_name: 'Rafael',
  last_name: 'Iop',
  gender: 'male',
  phone: '5541123456789',
  document: '01916119050',
  address: {
    zip_code: '94103',
    address: 'Mission St',
    number: '814',
    neighborhood: 'South of Market',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
    complement: null,
  },
});


test('Test Customer model', () => {
  expect(customer).toBeInstanceOf(Customer);
});
