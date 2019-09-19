import Vue from 'vue'
import Vuex from 'vuex'
import subscript from './modules/subscript'
import history from './modules/history'
import username from './modules/username'
import orderId from './modules/orderId'
import isLogin from './modules/isLogin'
import address from "./modules/address"
import remark from './modules/returnRemark'
import sunPrice from './modules/sumPrice'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sunPrice, subscript, history, username, orderId, isLogin, address, remark
    }
})
