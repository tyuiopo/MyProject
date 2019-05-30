var { articles } = require('../../data/db.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      /*
      articles:[
          {
              avatar:'../../images/avatar/4.jpg',
              date:'2019-05-06',
              title:'我是标题1',
              image:'../../images/article/2.jpg',
              desc:'我是描述1',
              star:30,
              view:40 
          },
          {
              avatar: '../../images/avatar/5.jpg',
              date: '2019-05-06',
              title: '我是标题2',
              image: '../../images/article/3.jpg',
              desc: '我是描述2',
              star: 60,
              view: 80
          }
      ]
      */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      /*
      var articles = [
          {
              avatar: '../../images/avatar/4.jpg',
              date: '2019-05-06',
              title: '我是标题1',
              image: '../../images/article/2.jpg',
              desc: '我是描述1',
              star: 30,
              view: 40
          },
          {
              avatar: '../../images/avatar/5.jpg',
              date: '2019-05-06',
              title: '我是标题2',
              image: '../../images/article/3.jpg',
              desc: '我是描述2',
              star: 60,
              view: 80
          }
      ];
      */
      /*
      this.setData({
          articles:articles
      },function(){
          console.log('in cb', this.data.articles)
      }.bind(this));
      console.log('out cb', this.data.articles)
      */
      this.setData({
          articles:articles
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  tapArticleItem: function (ev) {
    var articleId = ev.currentTarget.dataset.articleId
    wx.navigateTo({
        url: './article-detail/article-detail?articleId='+articleId,
    })
  }
})
