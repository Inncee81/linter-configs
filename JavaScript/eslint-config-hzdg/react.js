module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{name: 'Link', linkAttribute: 'to'}],
  },
};