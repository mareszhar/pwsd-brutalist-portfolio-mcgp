// Config Docs: https://github.com/antfu/unplugin-auto-import#configuration
export const vitePluginAutoImportConfig = {
  // targets to transform:
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/ // .md
  ],

  // I'm typecasting my imports because otherwise TS infers them as just type
  // 'string' and the AutoImport plugin registerer in vite.config.ts doesn't like that:
  imports: ['vue'] as ['vue'],

  // path to generate global type definitions for the auto imports:
  dts: 'src/auto-import.d.ts'
}

