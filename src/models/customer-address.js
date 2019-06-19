/**
 * Customer object model
 * @param {object} props
 * @param {string} props.zip_code
 * @param {string} props.address
 * @param {string} props.number
 * @param {string} props.neighborhood
 * @param {string} props.city
 * @param {string} props.state
 * @param {string} props.country
 * @param {string|null} props.complement
 * @constructor
 */
function CustomerAddress(props) {
  if (
    typeof props.zip_code === 'string'
    && typeof props.address === 'string'
    && typeof props.number === 'string'
    && typeof props.neighborhood === 'string'
    && typeof props.city === 'string'
    && typeof props.state === 'string'
    && typeof props.country === 'string'
  ) {
    this.zip_code = props.zip_code;
    this.address = props.address;
    this.number = props.number;
    this.neighborhood = props.neighborhood;
    this.city = props.city;
    this.state = props.state;
    this.country = props.country;
    this.complement = props.complement;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = CustomerAddress;
