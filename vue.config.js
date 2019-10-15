module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
          /\.map$/, 
          /manifest\.json$/ 
      ]
    }
  }
}
