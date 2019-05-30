var { getMovieListData } = require('../../../utils/util.js')
var app = getApp();


// pages/movie/movie-more/movie-more.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        requestUrl:'',
        tatalCount:0,
        tatalData:[],
        isEnd:false
    },
    handleMovieListData:function(data){
        wx.hideNavigationBarLoading();
        if(data.length == 0){
            wx.showToast({
                title: '底裤都拉出来啦!'
            })
            this.data.isEnd = true;
            return;
        }
        //获取新数据
        this.data.tatalCount = this.data.tatalCount + data.length;
        //保存以前数据
        this.data.tatalData = this.data.tatalData.concat(data);
        this.setData({
            movies: this.data.tatalData
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        var type = options.type;
        var baseUrl = app.GLOBAL_DATA.baseUrl;
        var requestUrl = '';
        var title = '';
        switch (type) {
            case 'inTheaters':
                requestUrl = baseUrl + 'v2/movie/in_theaters';
                title = '正在热映';
                break;
            case 'comingSoon':
                requestUrl = baseUrl + 'v2/movie/coming_soon';
                title = '即将上映';
                break;
            case 'top250':
                requestUrl = baseUrl + 'v2/movie/top250';
                title = '豆瓣Top250';
                break;
        }

        this.data.requestUrl = requestUrl;

        wx.setNavigationBarTitle({
            title: title,
        })
        /*
        getMovieListData(requestUrl, function (data) {
            _this.data.tatalCount = data.length
            _this.setData({
                movies: data
            })
        })
        */
        getMovieListData(requestUrl, this.handleMovieListData);
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var _this = this;
        wx.showNavigationBarLoading();
        getMovieListData(this.data.requestUrl, function (data) {
            wx.hideNavigationBarLoading();
            _this.setData({
                movies: data
            })
        }) 
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.isEnd) {
            wx.showToast({
                title: '底裤都拉出来啦!'
            })
            return;
        }
        var nextUrl = this.data.requestUrl + '?start=' + this.data.tatalCount + '&count=20'
        /*
        getMovieListData(nextUrl, function (data) {
            _this.data.tatalCount = _this.data.tatalCount + data.length
            _this.setData({
                movies: data
            })
        })
        */
        wx.showNavigationBarLoading();
        getMovieListData(nextUrl, this.handleMovieListData);
    }
})