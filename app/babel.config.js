const path = require('path')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': path.resolve(__dirname, 'src', 'components'),
          '@screens': path.resolve(__dirname, 'src', 'screens'),
          '@utils': path.resolve(__dirname, 'src', 'utils'),
          '@services': path.resolve(__dirname, 'src', 'services'),
          '@assets': path.resolve(__dirname, 'assets'),
          '@config': path.resolve(__dirname, 'src', 'config'),
          '@styles': path.resolve(__dirname, 'src', 'styles'),
        },
      },
    ],
  ],
}
