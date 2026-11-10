App({
  globalData: {
    cityList: []
  },
  onLaunch() {
    // 初始化时加载城市数据
    const cityData = require('./utils/data.js')
    this.globalData.cityList = cityData.cityList
  }
})