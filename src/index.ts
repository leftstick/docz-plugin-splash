import { createPlugin, Config } from 'docz-core'

export const splash = () =>
  createPlugin({
    setConfig: (config: Config) => {
      config.indexHtml = `
      <!DOCTYPE html>
      <html lang="{{ lang }}">
        <head>
          <meta charset="UTF-8">
          <meta name="description" content="{{ description }}">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>{{ title }}</title>
          <style id="splash-spinner">
            html, body{margin: 0;width: 100%;height: 100%;}
            .spinner {position: fixed;border: 4px solid #f3f3f3;border-top: 4px solid #3498db;border-radius: 50%;top: 40%;left: 50%;margin-left: -22.5px;width: 45px;height: 45px;animation: spin 1s linear infinite;}
            @keyframes spin {0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}
          </style>
          {{ head }}
        </head>
        <body>
          <div id="root"></div>
          <div class="spinner"></div>
          {{ footer }}
        </body>
      </html>
      `
      return {
        ...config,
        indexHtml: `
        <!DOCTYPE html>
        <html lang="{{ lang }}">
          <head>
            <meta charset="UTF-8">
            <meta name="description" content="{{ description }}">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>{{ title }}</title>
            <style id="splash-spinner">
              html, body{margin: 0;width: 100%;height: 100%;}
              .spinner {position: fixed;border: 4px solid #f3f3f3;border-top: 4px solid #3498db;border-radius: 50%;top: 40%;left: 50%;margin-left: -22.5px;width: 45px;height: 45px;animation: spin 1s linear infinite;}
              @keyframes spin {0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}
            </style>
            {{ head }}
          </head>
          <body>
            <div id="root"></div>
            <div class="spinner"></div>
            {{ footer }}
          </body>
        </html>
        `,
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
