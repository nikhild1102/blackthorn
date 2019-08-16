import bcrypt from 'bcrypt'
import crypto from 'crypto'
import passport from 'passport'
import _ from 'lodash';
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import { BasicStrategy } from 'passport-http'
import config from '../../config/app'
import Log from '../../server/logger'
import Token from './../models/token'
const db = require('../../server/sequelizeNew')

const registerInternalAuthStrategy = () => {

  passport.use('accessToken', new BearerStrategy(
    async (accessToken, done) => {
      const accessTokenHash = crypto.createHash('sha1').update(accessToken).digest('hex')
      try {
        const expirationDate = new Date(new Date().getTime() + (3600 * 24 * 7 * 1000))
        const tokenRecord = await db.token.update({ expirationDate },{
          returning: true,
          where: {
            token: accessTokenHash,
            expirationDate: { gt:db.sequelize.fn('NOW') } 
          }
        })
        if (tokenRecord[0]) {
          let record = _.chain(tokenRecord[1]).find('dataValues').get('dataValues').value()
          const user = await db.user.findOne({ where: { id: record.userId } })
          return done(null, user)
        } else {
          done(null, false, { message: 'Invalid access token' })
        }
      } catch (e) {
        done(e, null)
      }
    }
  ))
}

export default registerInternalAuthStrategy
