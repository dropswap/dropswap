/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */

// pull in env variables so that `next` commands can work without `vc dev`
require('dotenv').config();

const { withPlugins } = require('next-compose-plugins');
// const withSourceMaps = require('@zeit/next-source-maps');
// const withBundleAnalyzer = require('@next/bundle-analyzer');
// const withPino = require('next-pino');
const withTM = require('next-transpile-modules')(['@dropswap/dsdk', 'lodash-es']);

const withSvgr = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

module.exports = withPlugins(
  [
    [withSvgr],
    // [
    //   withBundleAnalyzer,
    //   {
    //     enabled: process.env.ANALYZE === 'true',
    //   },
    // ],
    // [withJsonStat],
    // [withPino],
    [withTM],
  ],
  {
    // // target is required (?) otherwise monorepo builds fail complaining that no serverless
    // // functions were produced
    // target: 'experimental-serverless-trace',

    // no free advertising on my watch
    poweredByHeader: false,

    // env variables to propagate to the client (public info)
    env: {},
  },
);
