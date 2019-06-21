## Send4 Connector test suit


### How to use

Just clone this repository, run `npm install`, then `npm run test`.

The `configuration.js` file must be updated with your `{{base_url}}` and request parameters.

### Endpoints

| Resource | Method | Endpoint |
|:-------- |:------:| --------:|
| Order | GET | `{{base_url}}/orders/:order_id` |
| Order statuses | GET | `{{base_url}}/orders/statuses` |
| Product variants | GET | `{{base_url}}/products/:product_id/variants` |
| Payment | POST | `{{base_url}}/refunds/pay` |
| Configuration | GET | `{{base_url}}/connector` |

