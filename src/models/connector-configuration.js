/**
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.description
 * @param {string} props.image_url
 * @param {object[]} props.custom_fields
 * @param {string[]} props.default_statuses
 * @param {string[]} props.default_wiretransfer_methods
 * @param {string} props.pay_refund_method
 * @constructor
 */
function ConnectorConfiguration(props) {
  if (typeof props.name === 'string'
  && typeof props.description === 'string'
  && typeof props.image_url === 'string'
  && typeof props.custom_fields === 'object'
  && typeof props.default_statuses === 'object'
  && typeof props.default_wiretransfer_methods === 'object'
  && typeof props.pay_refund_method === 'string') {
    this.name = props.name;
    this.description = props.description;
    this.image_url = props.image_url;
    this.custom_fields = props.custom_fields;
    this.default_statuses = props.default_statuses;
    this.default_wiretransfer_methods = props.default_wiretransfer_methods;
    this.pay_refund_method = props.pay_refund_method;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = ConnectorConfiguration;
