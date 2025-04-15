module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Απενεργοποίηση των overlays του Webpack Dev Server
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        client: {
          overlay: false, // Απενεργοποιεί τα overlays για σφάλματα
        },
      };
      return webpackConfig;
    },
  },
};