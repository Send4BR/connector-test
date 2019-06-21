/**
 * Payment response object model
 * @param {object} props
 * @param {string} props.transaction_id
 * @param {string|null} props.voucher_code
 * @constructor
 */
function PaymentResponse(props) {
  if (typeof props.transaction_id === 'string') {
    this.transaction_id = props.transaction_id;
    this.voucher_code = props.voucher_code;
  } else {
    throw new TypeError(`Properties do not match the requirements: ${JSON.stringify(props, null, 2)}`);
  }
}

module.exports = PaymentResponse;
