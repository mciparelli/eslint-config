module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'comma-dangle': [2, 'never'],
    'new-cap': [2, {
      capIsNew: false
    }],
    'no-void': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-plusplus': [0, { allowForLoopAfterthoughts: true }],
    'arrow-parens': [0, 'as-needed'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [0, { js: 'never' }]
  }
};
