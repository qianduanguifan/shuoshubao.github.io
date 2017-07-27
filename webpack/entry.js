import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
const PATH_ROOT = path.resolve(__dirname, '..')
const PATH_BUILD = path.resolve(PATH_ROOT, 'build')

export default {
  entry: {
    app: './src/asset/app',
    mobx: './src/asset/mobx'
  },
  output: {
    path: PATH_BUILD,
    publicPath: isDev ? '/build/' : 'https://orn2bxyo7.bkt.clouddn.com/',
    publicPath: '/build/',
    filename: isDev ? '[name].js' : '[name]_[chunkhash:5].js'
  }
}