'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  //NODE_ENV: '"development"',
  //API_HOST:"/api"
  //API_HOST:"/api/"
  //BASE_API: '"/api',
  //BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  //BASE_API: '"http://114.55.252.162:88"',

})
