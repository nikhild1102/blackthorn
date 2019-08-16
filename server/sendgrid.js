import config from '../config/app'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(config.get('sendgrid'));

export default sgMail

