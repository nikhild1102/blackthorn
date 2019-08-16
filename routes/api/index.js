import router from './router'

import CartController from '../../app/controllers/cart'
import ProductController from '../../app/controllers/product'
import AddressController from '../../app/controllers/address'
import OrderController from '../../app/controllers/order'

const swaggerUi 		= require('swagger-ui-express')
const YAML 				= require('yamljs')
const swaggerDocument 	= YAML.load('./docs.yaml')

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
router.get('/cart/details/:cartId', CartController.getDetails)
router.post('/cart/create', CartController.create)
router.post('/cart/update', CartController.update)
router.post('/cart/add-item', CartController.addItem)
router.post('/cart/remove-item', CartController.removeItem)
router.post('/address/add', AddressController.addAddress)
router.get('/address/get/:addressId', AddressController.getAddress)
router.get('/product/list', ProductController.list)
router.get('/product/detail/:productId', ProductController.detail)
router.post('/order/place', OrderController.placeOrder)
router.post('/order/update-status', OrderController.updateStatus)

export default router
