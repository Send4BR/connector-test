/**
 * Product object model
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
 * @param {string} props.sku
 * @param {number} props.qty
 * @param {number} props.price
 * @param {number} props.selling_price
 * @param {number|null} props.weight
 * @param {string[]|null} props.categories
 * @param {string|null} props.image_url
 * @constructor
 */
function Product(props) {
  if (
    typeof props.id === 'string'
    && typeof props.name === 'string'
    && typeof props.sku === 'string'
    && typeof props.qty === 'number'
    && typeof props.price === 'number'
    && typeof props.selling_price === 'number'
  ) {
    this.id = props.id;
    this.name = props.name;
    this.sku = props.sku;
    this.qty = props.qty;
    this.price = props.price;
    this.selling_price = props.selling_price;
    this.weight = props.weight || null;
    this.categories = props.categories || null;
    this.image_url = props.image_url || null;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = Product;
