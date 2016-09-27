module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'comma-dangle': [2, 'never'],
    'new-cap': [2, {
      'capIsNew': false
    }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0
  }
};
