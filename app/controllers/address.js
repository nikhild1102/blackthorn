const Responder   = require('../../server/expressResponder')
const AddAddress  = require('../services/address/addAddress')
const GetAddress  = require('../services/address/getAddress')

class AddressController {
  static async addAddress (req, res) {
    try {
      const address = await AddAddress.execute(req.body)
      Responder.send(address, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }

  static async getAddress (req, res) {
    try {
      const address = await GetAddress.execute({addressId:req.params.addressId})
      Responder.send(address, res)
    } catch(error) {
      Responder.operationFailed(res, error)
    }
  }
}

module.exports = AddressController;