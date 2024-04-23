const path = require('path')
const CracoLessPlugin = require('craco-less');

const pathResolve = (...args) => path.resolve(__dirname, ...args)
module.exports = {
    //webpack
    webpack: {
        alias: {
            '@': pathResolve('src'),
            //   __dirname当前文件所在路径
            "components": pathResolve('src/components'),
            "utils":pathResolve('src/utils')
        },
    },
    //less
    plugins: [
        {
          plugin: CracoLessPlugin
        },
      ],
  }