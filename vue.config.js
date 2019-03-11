module.exports = {
  publicPath: "/pwa_test/",
  outputDir: 'docs',
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      swDest: 'service-worker.js',

      // other options here...
    }
  }
};
