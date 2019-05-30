var { articles } = require('../../../data/db.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlaying:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId=options.articleId;
    var article = articles[articleId];

    //处理收藏状态
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = false;
    if (!articles_collection){
        var data = {};
        data[articleId]=false;
        wx.setStorageSync('articles_collection',data)
    }else{
        isCollected = !!articles_collection[articleId]
    }

    this.setData({...article,isCollected:isCollected})

    //监听音乐相关事件
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(function () {
        this.setData({
            isPlaying: true
        })
    }.bind(this))
    backgroundAudioManager.onPause(function () {
        this.setData({
            isPlaying: false
        })
    }.bind(this)) 
  },

    tapCollect:function(){
        // 处理收藏(本地储存)
        /*
        //设置
        wx.setStorageSync('key1',111);
        wx.setStorageSync('key2','hello');
        wx.setStorageSync('key3',{name:'Tom'})

        //更改
        wx.setStorageSync('key1',666)

        //获取
        console.log(wx.getStorageSync('key1'));
        console.log(wx.getStorageSync('key2'));
        console.log(wx.getStorageSync('key3'));

        //删除
        wx.removeStorageSync('key2')
        console.log(wx.getStorageSync('key1'));
        console.log(wx.getStorageSync('key2'));
        console.log(wx.getStorageSync('key3'));

        //清除所有
        wx.clearStorageSync()
        console.log(wx.getStorageSync('key1'));
        console.log(wx.getStorageSync('key2'));
        console.log(wx.getStorageSync('key3'));
        */
        
        var articles_collection = wx.getStorageSync('articles_collection')
        var isCollected = articles_collection[this.data.articleId];
        //改变storage里面的数据
        articles_collection[this.data.articleId] = !isCollected;
        wx.setStorageSync('articles_collection', articles_collection)
       
        //改变视图页面
        this.setData({
            isCollected: !isCollected
        }, function () {
            wx.showToast({
                title: isCollected ? '取消成功' : '收藏成功',
            })
        })
    },

    //处理分享
    tapShare:function(){
        var itemList = ['分享到朋友圈', '分享到QQ', '分享到微博']
        wx.showActionSheet({
            itemList: itemList,
            success: function (res) {
                wx.showToast({
                    title: itemList[res.tapIndex] + '成功',
                })
            }
        })
    },

    //处理音乐播放
    tapMusic:function(){
        var backgroundAudioManager = wx.getBackgroundAudioManager();
        var isPlaying = this.data.isPlaying;
        if (isPlaying) {
            backgroundAudioManager.pause();
            this.setData({
                isPlaying: false
            })
        } else {
            var music = articles[this.data.articleId].music;
            backgroundAudioManager.src = music.src;
            backgroundAudioManager.coverImgUrl = music.coverImgUrl;
            backgroundAudioManager.title = music.title;
            this.setData({
                isPlaying: true
            })
        }
    }
})