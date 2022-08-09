// Config Docs: https://vitejs.dev/config/#css-preprocessoroptions
export const viteCssConfig = {
  // make core styling mixins/functions/variables available in all Vue components:
  preprocessorOptions: {
    sass: {
      additionalData: `
      @use './src/shared/styles/include/Index' as Reusables
      `
    }
  }
}

