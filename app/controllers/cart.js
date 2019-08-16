const Responder   = require('../../server/expressResponder')
const GetDetails  = require('../services/cart/getDetails')
const CreateCart  = require('../services/cart/createCart')
const UpdateCart  = require('../services/cart/updateCart')
const AddItem     = require('../services/cart/addItem')
const RemoveItem  = require('../services/cart/removeItem')

class CartController {
  static async getDetails (req, res) {
    try {
      const details = await GetDetails.execute({cartId:req.params.cartId})
      Responder.send(details, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async create (req, res) {
    try {
      const create = await CreateCart.execute(req.body)
      Responder.send(create, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async update (req, res) {
    try {
      const update = await UpdateCart.execute(req.body)
      Responder.send(update, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async addItem (req, res) {
    try {
      const item = await AddItem.execute(req.body)
      Responder.send(item, res)
    } catch(error) {

    }
  }

  static async removeItem (req, res) {
    try {
      const item = await RemoveItem.execute(req.body)
      Responder.send(item, res)
    } catch(error) {

    }
  }
}

module.exports = CartController;