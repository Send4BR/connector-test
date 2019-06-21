const configuration = {
  baseUrl: 'http://localhost:8000',
  orderId: '1234',
  productId: 'id01',
  pay: {
    customer_email: 'user@mail.com',
    customer_document: 'user_document_number',
    refund_id: 'refund99282',
    refund_amount: '100000',
    expiring_date: '2019-09-20',
  },
};

module.exports = configuration;
