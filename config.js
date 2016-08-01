module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'comma-dangle': [2, 'never'],
    'new-cap': [2, {
      'capIsNew': false
    }]
  }
};
