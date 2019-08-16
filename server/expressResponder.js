const logger = require ('./logger')
const _ = require('lodash')

function Responder () { }

/*
 * This method sends the response to the client.
 */
function sendResponse (res, status, body) {
  if (!res.headersSent) {
    if (body) { return res.status(status).json(body) }
    return res.status(status).send()
  } else {
    logger.error('Response already sent.')
  }
}


/*
* set response structure
*/ 
function setReponse (object) {
  let i = 0;
  _.forOwn(object, (value, key) => {     
    if(i<1) {
      object['data'] = {};
    }
    if(key != "message") {
      object['data'][key] = value;
      delete object[key];
    }
    i++;
  });
  return object
}

/*
 * These methods are called to respond to the API user with the information on
 * what is the result of the incomming request
 */
Responder.success = (res, message) => {
  message = _.isString(message) ? { message } : message
  return sendResponse(res, 200, message)
}

Responder.created = (res, serviceResult) => {
  if (serviceResult.successful) {
    const response = setReponse(serviceResult.result)
    return sendResponse(res, 201, response)
  } else {
    Responder.operationFailed(res, serviceResult.errors)
  }  
}

Responder.deleted = (res, serviceResult) => {
  if (serviceResult.successful) {
    const response = setReponse(serviceResult.result)
    return sendResponse(res, 204, response)
  } else {
    Responder.operationFailed(res, serviceResult.errors)
  }  
}

Responder.operationFailed = (res, reason) => {
  const status = reason.status || 400
  let message = "";
  let errors = {};
  if (reason.name === 'SequelizeUniqueConstraintError') {
    message = reason.errors.map((er) => {
      let error = {}
      error[er.path] = er.message
      return error
    })
  } else {
    if(reason.message)
      message = reason.message 
    else
      errors = reason.errors
  }
  if (message instanceof Object) errors = _.flatten(_.flatMap(message).map((object) => { return _.flatMap(object) }))
  return sendResponse(res, status, { "message":message, "errors":errors })
}

Responder.send = (serviceResult, res) => {
  if (serviceResult.successful) {
    const response = setReponse(serviceResult.result)
    Responder.success(res, response)
  } else {
    Responder.operationFailed(res, serviceResult.errors)
  }  
}

module.exports = Responder;
