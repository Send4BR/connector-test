/**
 * Order status constructor
 * @param {object} props
 * @param {string} props.key
 * @param {string} props.description
 * @constructor
 */
function OrderStatus(props) {
  if (typeof props.key === 'string' && typeof props.description === 'string') {
    this.key = props.key;
    this.description = props.description;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = OrderStatus;
