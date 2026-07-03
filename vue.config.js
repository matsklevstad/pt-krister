const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        // Suppress opaque "Script error." from cross-origin third-party scripts
        // (FontAwesome, SimplyReview widget, Instagram embed, etc.)
        runtimeErrors: (error) => error.message !== 'Script error.',
      },
    },
  },
})
