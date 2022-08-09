// Config Docs: https://github.com/antfu/unplugin-vue-components#configuration
export const vitePluginVueComponentsConfig = {
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dts: 'src/components.d.ts'
}

// {
//   dirs: ['src/components'], // where to search for components
//   extensions: ['vue'], // valid file extensions for components
//   deep: true, // search for subdirectories
//   directoryAsNamespace: false, // Allow subdirectories as namespace prefix for components
//   directives: true, // auto import for directives (default for vue 3: true)
//   dts: 'src/components.d.ts', // generate global type declarations in this file

//   // filters for transforming targets:
//   include: [/\.vue$/, /\.vue\?vue/],
//   exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
// }

