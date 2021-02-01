App({
  globalData: { 
    titleBarHeight:0,
    statusBarHeight:0,
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    var systemInfo=my.getSystemInfoSync(); //获取手机配置信息
    console.log(systemInfo)
    this.globalData.statusBarHeight=systemInfo.statusBarHeight;  
    this.globalData.titleBarHeight=systemInfo.titleBarHeight;
    console.log(this.globalData)
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
