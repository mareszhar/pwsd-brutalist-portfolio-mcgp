import { vitePluginVueComponentsConfig } from './config/vitePluginVueComponentsConfig'
import { vitePluginAutoImportConfig } from './config/vitePluginAutoImportConfig'
import vue from '@vitejs/plugin-vue'
import { viteCssConfig } from './config/viteCssConfig'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport(vitePluginAutoImportConfig), // auto-import vue composition API functions
    Components(vitePluginVueComponentsConfig) // auto-import global vue components
  ],

  // make core styling mixins/functions/variables available in all Vue components:
  css: viteCssConfig,

  // define path aliases:
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/shared/styles/include/Index')
      },
      {
        find: '@typings',
        replacement: path.resolve(__dirname, 'src/shared/types')
      }
    ]
  }
})
