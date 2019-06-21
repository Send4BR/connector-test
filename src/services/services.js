const axios = require('axios');

const Order = require('../models/order');
const OrderStatus = require('../models/status');
const PaymentResponse = require('../models/payment-response');
const ProductVariant = require('../models/product-variant');
const ConnectorConfiguration = require('../models/connector-configuration');

const getEndpoints = require('../config/endpoints');
const configuration = require('../configuration');

const endpoints = getEndpoints();

/**
 * Gets the order object
 * @param {string} order_id
 * @returns {Promise<Error|null|Order>}
 */
async function getOrder(order_id) {
  try {
    const response = await axios.get(`${configuration.baseUrl}${endpoints.order.replace(':order_id', order_id)}`);
    if (response.data && response.data.success) {
      return new Order(response.data.data);
    }
    return null;
  } catch (err) {
    return new Error(err.message);
  }
}

/**
 * Gets order statuses
 * @returns {Promise<Error|null|OrderStatus[]>}
 */
async function getOrderStatuses() {
  try {
    const response = await axios.get(`${configuration.baseUrl}${endpoints.orderStatuses}`);
    if (response.data && response.data.success) {
      return response.data.data.map(status => new OrderStatus(status));
    }
    return null;
  } catch (err) {
    return new Error(err.message);
  }
}

/**
 * Gets product variants
 * @param {string} product_id
 * @returns {Promise<Error|null|ProductVariant[]>}
 */
async function getProductVariants(product_id) {
  try {
    const response = await axios.get(`${configuration.baseUrl}${endpoints.productVariations.replace(':product_id', product_id)}`);
    if (response.data && response.data.success) {
      return response.data.data.map(variant => new ProductVariant(variant));
    }
    return null;
  } catch (err) {
    return new Error(err.message);
  }
}

/**
 * @param {object} params
 * @param {string} params.customer_email
 * @param {string} params.customer_document
 * @param {string} params.refund_id
 * @param {string} params.refund_amount
 * @param {string} params.expiring_date
 * @returns {Promise<Error|null|PaymentResponse>}
 */
async function postPay(params) {
  try {
    const response = await axios.post(`${configuration.baseUrl}${endpoints.pay}`, params, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.data && response.data.success) {
      return new PaymentResponse(response.data.data);
    }
    return null;
  } catch (err) {
    return new Error(err.message);
  }
}

/**
 * Gets the connector configuration
 * @returns {Promise<Error|null|ConnectorConfiguration>}
 */
async function getConfig() {
  try {
    const response = await axios.get(`${configuration.baseUrl}${endpoints.config}`);
    if (response.data && response.data.success) {
      return new ConnectorConfiguration(response.data.data);
    }
    return null;
  } catch (err) {
    return new Error(err.message);
  }
}

module.exports = {
  getOrder,
  getOrderStatuses,
  getProductVariants,
  postPay,
  getConfig,
};
