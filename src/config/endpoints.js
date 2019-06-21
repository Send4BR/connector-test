const ENDPOINTS = {
  order: '/orders/:order_id',
  orderStatuses: '/orders/statuses',
  pay: '/refunds/pay',
  productVariations: '/products/:product_id/variants',
  config: '/connector',
};

function getEndpoints() {
  return ENDPOINTS;
}

module.exports = getEndpoints;
