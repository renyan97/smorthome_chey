var common = require('../../common/common.js')
var util = require('../../utils/util.js')
Page({
  data: {
    weather: {},
   list:[],
    beijing: ["https://data-1257086558.cos.ap-chengdu.myqcloud.com/qingchen.jpg",
      "https://data-1257086558.cos.ap-chengdu.myqcloud.com/baitian.jpg",
      "https://data-1257086558.cos.ap-chengdu.myqcloud.com/xiawu.jpg",
      "https://data-1257086558.cos.ap-chengdu.myqcloud.com/wanshang.jpg"],
      index:-1
  },
  onLoad: function () {

    var that = this;
    that.f1()
    that.ftime()
    common.loadWeatherData(function (data) {
      that.setData({
        weather: data
      });
    });
  },
  flishi:function()
  {
    var s=this.data.list
    wx.navigateTo({
      url: '/pages/lishi/lishi?a=this.data.list',
    })
  },
  f1:function()
  {
     var that=this
    wx.showToast({
      title: ' 正在更新中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: `https://1oubm229.qcloud.la/weapp/pi`,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
  
      login: false,
      success(result) {
        that.setData(
          {
            list: result.data
          })
          
        wx.showToast({
          title: '数据更新成功',
          icon: 'fail',
          duration: 1000
        })
      },
      fail(error) {
        wx.showToast({
          title: '检查网络',
          icon: 'fail',
          duration: 1000
        })
      }
  })
    },
ftime:function()
  {
  var hour = util.formatTime0(new Date())
  if(hour>19&&hour<=24)
  {
    this.setData(
      {
        index:3
      })
  }
    if (hour > 0 && hour <= 6) {
      this.setData(
        {
          index: 3
        })
    }
      if (hour > 6 && hour<= 8) {
        this.setData(
          {
            index: 0
          })
      }
        if (hour > 8 && hour<= 17) {
          this.setData(
            {
              index: 1
            })
  }
        if (hour > 17 && hour <= 19) {
          this.setData(
            {
              index: 2
            })
      }
  }

 

 
})