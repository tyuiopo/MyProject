//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotton:function(){
      wx.switchTab({
          url: '/pages/article/article',
      })
    /* 有返回键
    wx.navigateTo({
      url: '../article/article',//相对路径
    })
    */
    /*
    //没有返回键
    wx.redirectTo({
      url: '../article/article',
    })
    */
  }
})
