const Customer = require('./customer');
const Product = require('./product');

/**
 * Order object model
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.delivered_at
 * @param {string} props.currency
 * @param {number} props.value
 * @param {string} props.status
 * @param {object} props.customer
 * @param {object[]} props.products
 * @param {string|null} props.invoice_number
 * @param {string|null} props.shipped_at
 * @param {number|null} props.shipping_value
 * @param {string[]|null} props.payment_methods
 * @param {boolean|null} props.is_marketplace
 * @param {string|null} props.marketplace_name
 * @constructor
 */
function Order(props) {
  if (
    typeof props.id === 'string'
    && typeof props.delivered_at === 'string'
    && typeof props.currency === 'string'
    && typeof props.value === 'number'
    && typeof props.status === 'string'
    && typeof props.customer === 'object'
    && typeof props.products === 'object'
  ) {
    this.id = props.id;
    this.invoice_number = props.invoice_number;
    this.shipped_at = props.shipped_at;
    this.delivered_at = props.delivered_at;
    this.currency = props.currency;
    this.value = props.value;
    this.shipping_value = props.shipping_value;
    this.payment_methods = props.payment_methods;
    this.status = props.status;
    this.is_marketplace = props.is_marketplace;
    this.customer = new Customer(props.customer);
    this.products = props.products.map(product => new Product(product));
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = Order;
