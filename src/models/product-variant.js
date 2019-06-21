const Grid = require('./grid');

/**
 *
 * @param {object} props
 * @param {string} props.sku
 * @param {string} props.name
 * @param {object} props.grid
 * @param {string|null} props.image
 * @constructor
 */
function ProductVariant(props) {
  if (typeof props.sku === 'string'
  && typeof props.name === 'string'
  && typeof props.grid === 'object') {
    this.sku = props.sku;
    this.name = props.name;
    this.grid = new Grid(props.grid);
    this.image = props.image;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = ProductVariant;
