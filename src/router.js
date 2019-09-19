import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // 登陆
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      // 我的
      path: '/mine',
      name: 'mine',
      component: () => import('./components/MinePage.vue')
    },
    {
      // 搜索
      path: '/search',
      name: 'search',
      component: () => import('./components/Search.vue')
    },
    {
      // 订单
      path: '/myorder',
      name: 'myorder',
      component: () => import('./views/MyOrder.vue')
    },
    {
      // 订单详情
      path: '/myorder/orderdetail',
      name: 'orderdetail',
      component: () => import('./views/OrderDetail.vue')
    },
    {
      // 下载app
      path: '/downloadapp',
      name: 'downloadapp',
      component: () => import('./views/DownloadApp.vue')
    },
    {
      // 服务中心
      path: '/servicecenter',
      name: 'servicecenter',
      component: () => import('./views/ServeCenter.vue')
    },
    {
      // 当前积分
      path: '/mysurplus',
      name: 'mysurplus',
      component: () => import('./views/MySurplus.vue')
    },
    {
      // 新增地址
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('./views/AddAddress.vue')
    },
    {
      // 选择地址
      path: '/chooseAddress',
      name: 'chooseAddress',
      component: () => import('./views/ChooseAddress.vue')
    },
    {
      // 积分说明
      path: '/mysurplus/intergraldec',
      name: 'intergraldec',
      component: () => import('./views/Intergraldec.vue')
    },
    {
      // 21个界面
      path: '/servicecenter/questiondetail',
      name: 'questiondetail',
      component: () => import('./views/QuestionDetail.vue')
    },
    {
      // 我的余额
      path: '/balance',
      name: 'balance',
      component: () => import('./views/Balance.vue')
    },
    {
      // 我的优惠
      path: '/benifit',
      name: 'benifit',
      component: () => import('./views/Benifit.vue')
    },
    {
      // 推荐有奖
      path: '/benifit/commend',
      name: 'commend',
      component: () => import('./views/Commend.vue')
    },
    {
      // 历史红包
      path: '/benifit/redbaghistory',
      name: 'redbaghistory',
      component: () => import('./views/HbHistory.vue')
    },
    {
      // 兑换红包
      path: '/benifit/exchange',
      name: 'exchange',
      component: () => import('./views/Exchange.vue')
    },
    {
      // 商家代金券说明
      path: '/benifit/voucherdec',
      name: 'voucherdec',
      component: () => import('./views/Voucherdec.vue')
    },
    {
      // 余额说明
      path: '/balance/balancedec',
      name: 'balancedec',
      component: () => import('./views/Balancedec.vue')
    },
    {
      // 积分商城
      path: '/intergralmall',
      name: 'intergralmall',
      component: () => import('./views/IntergralMall.vue')
    },
    {
      // 红包说明
      path: '/redbag/redbagdec',
      name: 'redbagdec',
      component: () => import('./views/Redbagdec.vue')
    },
    {
      // 会员卡
      path: '/vipcard',
      name: 'vipcard',
      component: () => import('./views/Vipcard.vue')
    },
    {
      // 会员卡说明
      path: '/vipcard/vipcarddec',
      name: 'vipcarddec',
      component: () => import('./views/Vipcarddec.vue')
    },
    {
      // 会员卡购买记录
      path: '/vipcard/buyrecord',
      name: 'buyrecord',
      component: () => import('./views/Buyrecord.vue')
    },
    {
      // 兑换会员
      path: '/vipcard/usecart',
      name: 'usecart',
      component: () => import('./views/Usecard.vue')
    },
    {
      // 商家详情
      path: '/shop/shopdetail',
      name: 'shopdetail',
      component: () => import('./views/ShopDetail.vue')
    },
    {
      // 食品监督安全公示
      path: '/shop/shopdetail/shopsafe',
      name: 'shopsafe',
      component: () => import('./views/Shopsafe.vue')
    },
    {
      // 确认订单
      path: '/confirmorder',
      name: 'confirmorder',
      component: () => import('./views/ConfirmOrder.vue')
    },
    {
      // 开发票
      path: '/confirmorder/invoice',
      name: 'invoice',
      component: () => import('./views/Invoice.vue')
    },
    {
      // 点菜备注
      path: '/confirmorder/orderremark',
      name: 'orderremark',
      component: () => import('./views/OrderRemarks.vue')
    },
    {
      // 付钱
      path: '/confirmorder/payfor',
      name: 'payfor',
      component: () => import('./views/Payfor.vue')
    },
    {
      // 改名字
      path: '/mine/info/setusername',
      name: 'setusername',
      component: () => import('./views/SetUsername.vue')
    },
    {
      // 选择地址
      path: '/searchAddress',
      name: 'searchAddress',
      component: () => import('./views/SearchAddress.vue')
    },
    {
      // 登陆后，账户信息
      path: '/mine/info',
      name: 'info',
      component: () => import('./views/UserMessage.vue')
    },
    {
      // 重置密码
      path: '/forget',
      name: 'forget',
      component: () => import('./views/RenewPass.vue')
    },
    {
      // 收货地址
      path: '/mine/info/address',
      name: 'address',
      component: () => import('./views/EditAddress.vue')
    },
    {
      // 新增地址
      path: '/mine/info/address/add',
      name: 'add',
      component: () => import('./views/NewAddress.vue')
    },
    {
      // 新增地址细节
      path: '/mine/info/address/add/addDetail',
      name: 'addDetail',
      component: () => import('./views/AddDetail.vue')
    },
    {
      // 选择地址
      path: '/city/',
      name: 'city',
      component: () => import('./views/City.vue')
    },
    {
      // 主界面
      path: '/mainpage/',
      name: 'mainpage',
      component: () => import('./components/Mainpage.vue')
    },
    {
      // 商店
      path: '/shoppage/',
      name: 'shoppage',
      component: () => import('./views/Shoppage.vue')
    },
    {
      // 分类
      path: '/sortpage/',
      name: 'sortpage',
      component: () => import('./views/Sortpage.vue')
    },
    {
      // 如果在访问路径时没找到，就会走这个
      path: "*",
      redirect: "/"
    }
  ]
})
