Page({
  data: {},
  onLoad() {},
  jump:function(){
    my.switchTab({
      url: '/pages/index/index',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
 }
});
