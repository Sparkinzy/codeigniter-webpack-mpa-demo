const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
	mode: 'production', // 通过 mode 声明开发环境
	output: {
		path: path.resolve(__dirname, '../../public/dev'),
		// 打包多出口文件
		// 生成 a.bundle.[hash].js  b.bundle.[hash].js
		filename: 'js/[name].js',
		publicPath: '/dev/'
	},
	devtool: "source-map",  // 开启调试模式
	plugins: [
	],
	module: {
		rules: []
	},
}
module.exports = merge(webpackConfigBase, webpackConfigDev);