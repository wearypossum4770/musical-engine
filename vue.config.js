module.exports = {
  pluginOptions: {
    pwa: {
      name: "My App",
      themeColor: "#4DBA87",
      msTileColor: "#000000",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "black",
      // configure the workbox plugin
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: "dev/sw.js", // ...other Workbox options...
      },
    },
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
    },
  },
};
