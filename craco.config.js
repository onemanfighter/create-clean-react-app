const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@uiStore': path.resolve(__dirname, './src/store/ui'),
      '@appStore': path.resolve(__dirname, './src/store/app'),
    },
  },
};
