const Responder   = require('../../server/expressResponder')
const PlaceOrder  = require('../services/order/place')
const UpdateOrderStatus  = require('../services/order/updateStatus')

class OrderController {
  static async placeOrder (req, res) {
    try {
      const order = await PlaceOrder.execute(req.body)
      Responder.send(order, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async updateStatus (req, res) {
    try {
      const order = await UpdateOrderStatus.execute(req.body)
      Responder.send(order, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }
}

module.exports = OrderController;