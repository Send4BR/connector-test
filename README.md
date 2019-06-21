## Send4 Connector test suit


### How to use

Just clone this repository, run `npm install`, then `npm run test`.

The file `configuration.js` has all parameters that this test use.

### Endpoints

| Resource | Method | Endpoint |
|:-------- |:------:| --------:|
| Order | GET | `{{base_url}}//orders/:order_id` |
| Order statuses | GET | `{{base_url}}//orders/:order_id` |
| Product variants | GET | `{{base_url}}//orders/:order_id` |
| Payment | POST | `{{base_url}}//orders/:order_id` |
| Configuration | GET | `{{base}}/connector` |

