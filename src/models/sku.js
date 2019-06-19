const Grid = require('./grid');

/**
 * SKU object model
 * @param {object} props
 * @param {string} props.sku
 * @param {string} props.name
 * @param {string|null} props.image
 * @param {object[]} props.grid
 * @constructor
 */
function SKU(props) {
  if (typeof props.sku === 'string' && typeof props.name === 'string' && typeof props.grid === 'object') {
    this.sku = props.sku;
    this.name = props.name;
    this.image = props.image;
    this.grid = new Grid(props.grid);
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = SKU;
