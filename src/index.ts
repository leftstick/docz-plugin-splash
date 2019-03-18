import path from 'path'
import { createPlugin, Config } from 'docz-core'

export const splash = () =>
  createPlugin({
    setConfig: (config: Config) => {
      const cwd = process.cwd()
      return {
        ...config,
        indexHtml: path
          .join(
            __dirname.replace(process.cwd(), '').replace('/dist', '/src'),
            'index.tpl.html'
          )
          .replace(/^\//, ''),
      }
    },
    onPostRender: () => {
      const splash = document.querySelector('#splash-spinner')
      const spinner = document.querySelector('.spinner')
      if (splash) {
        document.head.removeChild(splash)
      }
      if (spinner && spinner.parentNode) {
        spinner.parentNode.removeChild(spinner)
      }
    },
  })
