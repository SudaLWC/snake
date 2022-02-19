// 配置webpack.config.js

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // mode: 'development',
  mode: 'production',
  // 指定入口文件
  entry: './src/index.ts',
  // 出口配置 
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 指定打包文件名
    filename: 'bundle.js',

    // 告诉webpack不使用箭头函数,const
    environment: {
      arrowFunction: false,
      const: false
    }
  },

  // 指定打包使用的模块 
  module: {
    // 指定加载规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 使用的loader
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 兼容浏览器版本
                    targets: {
                      'chrome': '58',
                      'ie': '11'
                    },
                    // 指定corejs版本
                    'corejs': '3',
                    // 使用corejs的方式：按需加载
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 排除的文件规则
        exclude: /node_modules/
      },

      // 设置less文件的处理
      {
        test: /\.less$/,
        // loader从下向上加载
        use: [
          'style-loader',
          'css-loader',
          // 引入postcss处理兼容性问题
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      },

      {
        test: /\.(woff|svg|eot|ttf)$/,
        // 必须添加
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // 配置webpack插件 
  plugins: [
    // 先清空dist目录下的文件再打包bundle.js
    new CleanWebpackPlugin(),
    // 自动打包引入的文件并生成html文件
    new HTMLWebpackPlugin({
      // 自定义标题
      // title: '自定义标题',
      // 设置模板路径
      template: './src/index.html',
      favicon: path.join('./src', 'favicon.ico')
    })
  ],

  // 用来设置引用模块 
  resolve: {
    extensions: ['.ts', '.js']
  }
}