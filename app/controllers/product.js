const Responder   = require('../../server/expressResponder')
const ProductDetail  = require('../services/products/details')
const ProductList  = require('../services/products/list')

class ProductController {
  static async detail (req, res) {
    try {
      const details = await ProductDetail.execute({productId:req.params.productId})
      Responder.send(details, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async list (req, res) {
    try {
      const list = await ProductList.execute(req.body)
      Responder.send(list, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }
}

module.exports = ProductController;