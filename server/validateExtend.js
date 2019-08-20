import validate from 'validate.js';
import moment from 'moment';
import i18n from 'i18n';
const configureI18n = () => {
  i18n.configure({
    locales: ['en'],
    register: global,
    defaultLocale: 'en',
    objectNotation: true,
    directory: __dirname + '/../locales',
  });
};

const validateDateFormat = () => {
  validate.extend(validate.validators.datetime, {
    parse: function(value, options) {
      return +moment.utc(value);
    },
    format: function(value, options) {
      const format = options.dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss';
      return moment.utc(value).format(format);
    },
  });
};

export default {validateDateFormat, configureI18n};
