const app = getApp()

Component({
  mixins: [],
  data: {
    statusBarHeight: 0, //状态栏高度
		titleBarHeight: 0 //标题栏高度
  },
  props: {
    navbarData: {
      address:'广东省广州市'
    }
  },
  didMount() {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
    })
  },
  didUpdate(prevProps,prevData) {
    // console.log(prevProps,prevData)
  },
  didUnmount() {},
  methods: {

  },
});
