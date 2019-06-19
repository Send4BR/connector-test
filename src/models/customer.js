const CustomerAddress = require('./customer-address');

/**
 * Customer object model
 * @param {object} props
 * @param {string|null} props.id
 * @param {string} props.email
 * @param {string} props.first_name
 * @param {string} props.last_name
 * @param {string|null} props.gender
 * @param {string} props.phone
 * @param {string} props.document
 * @param {string} props.address
 * @constructor
 */
function Customer(props) {
  if (
    typeof props.email === 'string'
    && typeof props.first_name === 'string'
    && typeof props.last_name === 'string'
    && typeof props.phone === 'string'
    && typeof props.document === 'string'
    && typeof props.address === 'object'
  ) {
    this.id = props.id;
    this.email = props.email;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.gender = props.gender;
    this.phone = props.phone;
    this.document = props.document;
    this.address = new CustomerAddress(props.address);
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = Customer;
