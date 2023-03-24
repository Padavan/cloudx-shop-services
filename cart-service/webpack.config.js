const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = function (options) {
  return {
    ...options,
    externals: [],
    plugins: [
      new IgnorePlugin({
        checkResource(resource) {
          const lazyImports = [
            '@fastify/static',
            '@fastify/view',
            '@nestjs/microservices',
            '@nestjs/microservices/microservices-module',
            '@nestjs/platform-express',
            '@nestjs/websockets/socket-module',
            'amqp-connection-manager',
            'amqplib',
            'cache-manager',
            'cache-manager/package.json',
            'class-transformer/storage',
            'hbs',
            'ioredis',
            'kafkajs',
            'mqtt',
            'class-validator',
            'class-transformer',
            'pg-native',
            'nats',
          ];
          if (!lazyImports.includes(resource)) {
            return false;
          }
          try {
            require.resolve(resource, { paths: [process.cwd()] });
          } catch (err) {
            return true;
          }
          return false;
        },
      }),
    ],
  };
};

// const tsConfigFile = 'tsconfig.json';

// module.exports = {
//   entry: './src/main',
//   externals: [],
//   module: {
//     rules: [
//       {
//         loader: 'ts-loader',
//         options: {
//           experimentalWatchApi: true,
//           transpileOnly: true,
//         },
//         test: /\.ts$/,
//       },
//     ],
//   },
//   node: {
//     __dirname: false,
//     __filename: false,
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist/'),
//   },
//   resolve: {
//     extensions: ['.js', '.json', '.ts'],
//     // mainFields: ['main'],
//     // plugins: [new TsconfigPathsPlugin({ configFile: tsConfigFile })],
//   },
//   target: 'node',
// };