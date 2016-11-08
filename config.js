module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'comma-dangle': [2, 'never'],
    'new-cap': [2, {
      capIsNew: false
    }],
    'no-void': 0,
    'consistent-return': [2, { treatUndefinedAsUnspecified: true }],
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0
  }
};
