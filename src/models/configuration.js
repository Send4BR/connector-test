/**
 * Configuration object model
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.description
 * @param {object[]} props.auth_fields
 * @param {string[]} props.default_statuses
 * @param {string[]} props.default_wiretransfer_methods
 * @param {string} props.pay_refund_method
 * @constructor
 */
function ConnectorConfiguration(props) {
  this.name = props.name;
  this.description = props.description;
  this.auth_fields = props.auth_fields;
  this.default_statuses = props.default_statuses;
  this.default_wiretransfer_methods = props.default_wiretransfer_methods;
  this.pay_refund_method = props.pay_refund_method;
}

module.exports = ConnectorConfiguration;
