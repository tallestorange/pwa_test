module.exports = {
  publicPath: "/pwa_test/",
  outputDir: 'docs',
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
};
