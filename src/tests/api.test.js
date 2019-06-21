const configuration = require('../configuration');
const Order = require('../models/order');
const OrderStatus = require('../models/status');
const PaymentResponse = require('../models/payment-response');
const ProductVariant = require('../models/product-variant');
const ConnectorConfiguration = require('../models/connector-configuration');
const {
  getOrder, postPay, getOrderStatuses, getProductVariants, getConfig,
} = require('../services/services');


describe('API Endpoints testing', () => {
  test(`GET  ${configuration.baseUrl}/orders/${configuration.orderId}`, async () => {
    const order = await getOrder(configuration.orderId);
    expect(order).toBeInstanceOf(Order);
  });

  test(`GET  ${configuration.baseUrl}/orders/statuses`, async () => {
    const orderStatuses = await getOrderStatuses();
    orderStatuses.forEach(orderStatus => expect(orderStatus).toBeInstanceOf(OrderStatus));
  });

  test(`GET  ${configuration.baseUrl}/products/${configuration.productId}/variants`, async () => {
    const productVariants = await getProductVariants(configuration.productId);
    productVariants.forEach(variant => expect(variant).toBeInstanceOf(ProductVariant));
  });

  test(`POST ${configuration.baseUrl}/refunds/pay`, async () => {
    const paymentResponse = await postPay(configuration.pay);
    expect(paymentResponse).toBeInstanceOf(PaymentResponse);
  });

  test(`GET  ${configuration.baseUrl}/connector`, async () => {
    const config = await getConfig();
    expect(config).toBeInstanceOf(ConnectorConfiguration);
  });
});
