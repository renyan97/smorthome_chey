// pages/kongzhi/kongzhi.js
var serviceId = "0000ffe0-0000-1000-8000-00805f9b34fb"

var characteristicId = "0000ffe1-0000-1000-8000-00805f9b34fb"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dengpao_index:0,
    woshi_index:0,
    chufang_index:0,
    penzai_index:0,
    yushi_index:0,
    lanya_index: 0,
    caideng_index:0,
    yinyue_index:0,
    chuanglian_index:0,
    fengshan_index:0,
    kongtiao_index:0,
    deng_index:0,
    deng: ["/images/deng0.png", "/images/deng1.png"],
    kongtiao: ["/images/kongtiao0.png", "/images/kongtiao1.png"],
    dengpao: ["/images/dengpao0.png","/images/dengpao1.png"],
    woshi: ["/images/woshi0.png","/images/woshi1.png"],
    chufang: ["/images/chufang0.png", "/images/chufang1.png"],
    penzai: ["/images/penzai0.png", "/images/penzai1.png"],
    yushi: ["/images/yushi0.png", "/images/yushi1.png"],
    lanya: ["/images/lanya0.png", "/images/lanya1.png"],
    caideng: ["/images/caideng0.png", "/images/caideng1.png",
      "/images/caideng2.png", "/images/caideng3.png",
      "/images/caideng4.png",],
    yinyue: ["/images/yinyue0.png", "/images/yinyue1.png",
      "/images/yinyue2.png", "/images/yinyue3.png",],
    chuanglian: ["/images/chuanglian0.png", "/images/chuanglian1.png",],
     fengshan: ["/images/fengshan0.png", "/images/fengshan1.png","/images/fengshan2.png", "/images/fengshan3.png"],
  },
   f1:function()
   { 
     var that=this
     if (wx.getStorageSync('deviceconnected'))
     {
     if(that.data.dengpao_index==0){ 
       wx.setStorageSync('dengpao_key', 1)
    that.setData( {dengpao_index:1  }  )
     that.formSubmit('1011');
       wx.showToast({
         title: "已打开",
         icon: 'sucess',
         mask: true,
         duration: 2000
       });
     }
   else{
       wx.setStorageSync('dengpao_key', 0)
      that.setData( { dengpao_index: 0 } )
       that.formSubmit('1010');
       wx.showToast({
         title: "已关闭",
         icon: 'sucess',
         mask: true,
         duration: 2000
       });
     }  
     }
     else{
       wx.showToast({
         title: "未连接蓝牙",
         icon: 'fail',
         mask: true,
         duration: 2000 
       });
       wx.navigateTo({
         url: '/pages/lanya/lanya',
       })
     }
},

     
  f2: function () {
    var that = this
    if (wx.getStorageSync('deviceconnected')) {
    if (that.data.woshi_index == 0) {
      wx.setStorageSync('woshi_key', 1)
      this.setData({ woshi_index: 1 })
      that.formSubmit('1021');
      wx.showToast({
        title: "已打开",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
    }
    else {
      wx.setStorageSync('woshi_key', 0)
      this.setData({ woshi_index: 0 })
      that.formSubmit('1020');
      wx.showToast({
        title: "已关闭",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
    }}
    else {
      wx.showToast({
        title: "未连接蓝牙",
        icon: 'fail',
        mask: true,
        duration: 2000
      });
      wx.navigateTo({
        url: '/pages/lanya/lanya',
      })
    }
  },
  f3: function () {
    var that = this
    if (wx.getStorageSync('deviceconnected')) {
    if (that.data.chufang_index == 0) {
      wx.setStorageSync('chufang_key', 1)
      this.setData({ chufang_index: 1 })
      that.formSubmit('1031');
      wx.showToast({
        title: "已打开",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
    }
    else {
      wx.setStorageSync('chufang_key', 0)
      this.setData({ chufang_index: 0 })
      that.formSubmit('1030');
      wx.showToast({
        title: "已关闭",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
      }
    } else {
      wx.showToast({
        title: "未连接蓝牙",
        icon: 'fail',
        mask: true,
        duration: 2000
      });
      wx.navigateTo({
        url: '/pages/lanya/lanya',
      })
    }
  },
  f4: function () {
    var that = this
    if (wx.getStorageSync('deviceconnected')) {
    if (that.data.yushi_index == 0) {
      wx.setStorageSync('yushi_key', 1)
      this.setData({ yushi_index: 1 })
      that.formSubmit('1041');
      wx.showToast({
        title: "已打开",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
    }
    else {
      wx.setStorageSync('yushi_key', 0)
      this.setData({ yushi_index: 0 })
      that.formSubmit('1040');
      wx.showToast({
        title: "已关闭",
        icon: 'sucess',
        mask: true,
        duration: 2000
      });
      }
    } else {
      wx.showToast({
        title: "未连接蓝牙",
        icon: 'fail',
        mask: true,
        duration: 2000
      });
      wx.navigateTo({
        url: '/pages/lanya/lanya',
      })
    }
  },
  f5: function () {
    var that = this
    if (that.data.penzai_index == 0) {
      wx.setStorageSync('penzai_key', 1)
      this.setData({penzai_index: 1 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1302
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已打开",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });
       
        },
        fail(error) {
          wx.showToast({
            title:"打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      }) 
    }
    else {
      wx.setStorageSync('penzai_key', 0)
      this.setData({ penzai_index: 0 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1303
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已关闭",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "关闭失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      }) 
    }
  },
f6:function()
{
  wx.navigateTo({
    url: '/pages/lanya/lanya',
  })
},
f7:function()
{
   var that=this
   if (wx.getStorageSync('deviceconnected')) { 
     var s =that.data.caideng_index
   s=parseInt(s)
  wx.setStorageSync('caideng_key', s+1)
   s=s+1
   if(s==5)
     s=0
   switch(s)
   {
     case 0: that.formSubmit('1100')
     break;
     case 1:  that.formSubmit('1101')
     break;
     case 2: that.formSubmit('1103')
     break;
     case 3:  that.formSubmit('1104')
     break;
     case 4:  that.formSubmit('1107')
     break;

   }
 
   that.setData({caideng_index:s})
   
}
 else {
    wx.showToast({
      title: "未连接蓝牙",
      icon: 'fail',
      mask: true,
      duration: 2000
    });
    wx.navigateTo({
      url: '/pages/lanya/lanya',
    })
  }
} 
,
  f8: function () {
    var that = this
    if (wx.getStorageSync('deviceconnected')) {
      var s = that.data.yinyue_index
      s = parseInt(s)
      wx.setStorageSync('yinyue_key', s + 1)
      s = s + 1
      if (s == 3)
        s = 0
      switch (s) {

        case 0:
          that.formSubmit('t')
         that.formSubmit('1100')
          break;
        case 1: that.formSubmit('1112')
          break;
        case 2: 
        that.formSubmit('t')
        that.formSubmit('1113')
          break;
      }

      that.setData({ yinyue_index: s })

    }
    else {
      wx.showToast({
        title: "未连接蓝牙",
        icon: 'fail',
        mask: true,
        duration: 2000
      });
      wx.navigateTo({
        url: '/pages/lanya/lanya',
      })
    }
  }
  ,
  f9: function () {
    var that = this
    if (that.data.chuanglian_index == 0) {
      wx.setStorageSync('chuanglian_key', 1)
      this.setData({ chuanglian_index: 1 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1401
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已打开",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
    else {
      wx.setStorageSync('chuanglian_key', 0)
      this.setData({ chuanglian_index: 0 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1402
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已关闭",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "关闭失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
  },
  f10: function () {
    var that = this

    if (that.data.fengshan_index == 0) 
    {
      wx.setStorageSync('fengshan_key', 1)
      this.setData({ fengshan_index: 1})
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    })

      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1501
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "1档",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });
        },
        fail(error) {
          wx.showToast({
            title: "打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
    else if (that.data.fengshan_index == 1) {
      wx.setStorageSync('fengshan_key', 2)
      this.setData({ fengshan_index: 2 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1502
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "2档",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
    else if (that.data.fengshan_index == 2) {
      wx.setStorageSync('fengshan_key', 3)
      this.setData({ fengshan_index:3 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1503
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "3档",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
    else  {
      wx.setStorageSync('fengshan_key', 0)
      this.setData({ fengshan_index: 0 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1500
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已关闭",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "关闭失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
  },
  f12: function () {
    var that = this
    if (that.data.deng_index == 0) {
      wx.setStorageSync('deng_key', 1)
      this.setData({ deng_index: 1 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1601
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已打开",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "打开失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
    else {
      wx.setStorageSync('deng', 0)
      this.setData({ deng_index: 0 })
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      wx.request({
        url: `http://1oubm229.qcloud.la/weapp/piup`,
        method: "POST",
        data: {
          piout: 1602
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        login: false,
        success(result) {
          wx.showToast({
            title: "已关闭",
            icon: 'sucess',
            mask: true,
            duration: 2000
          });

        },
        fail(error) {
          wx.showToast({
            title: "关闭失败",
            icon: 'fail',
            mask: true,
            duration: 2000
          });
        }
      })
    }
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var value0 = wx.getStorageSync('dengpao_key') 
    if(value0.length==0)
         {
      wx.setStorageSync('dengpao_key', 0)
      wx.setStorageSync('woshi_key', 0)
      wx.setStorageSync('chufang_key',0)
      wx.setStorageSync('yushi_key', 0)
      wx.setStorageSync('penzai_key', 0)
      wx.setStorageSync('yinyue_key', 0)
      wx.setStorageSync('caideng_key', 0)
      wx.setStorageSync('chuanglian_key', 0)
      wx.setStorageSync('fengshan_key', 0)
      wx.setStorageSync('kongtiao_key', 0)
      wx.setStorageSync('deng_key', 0)
     
         }
    var value0 = wx.getStorageSync('dengpao_key')
    var value1 = wx.getStorageSync('woshi_key')
    var value2 = wx.getStorageSync('chufang_key')
    var value3 = wx.getStorageSync('yushi_key')
    var value4 = wx.getStorageSync('penzai_key')
    var value7 = wx.getStorageSync('chuanglian_key')
    var value5 = wx.getStorageSync('deviceconnected')
    var value8 = wx.getStorageSync('fengshan_key')
    var value9 = wx.getStorageSync('kongtiao_key')
    var value10 = wx.getStorageSync('deng_key')
    console.log(value5)
    if(value5)
       value5=1
    if(!value5)
       value5=0
    this.setData(
      {
        dengpao_index: value0,
        woshi_index: value1,
        chufang_index: value2,
        yushi_index: value3,
        penzai_index: value4,
        lanya_index: value5,
        chuanglian_index: value4,
        fengshan_index: value8,
        kongtiao_index:value9,
        deng_index:value10,
      })
      
  },
  formSubmit: function (e) {

    var senddata = e;

    var that = this

    let buffer = new ArrayBuffer(senddata.length)

    let dataView = new DataView(buffer)

    for (var i = 0; i < senddata.length; i++) {

      dataView.setUint8(i, senddata.charAt(i).charCodeAt())

    }

    console.log(wx.getStorageSync('connectedDeviceId'))
    
    wx.writeBLECharacteristicValue({

      deviceId: wx.getStorageSync('connectedDeviceId'),

      serviceId: serviceId,

      characteristicId: characteristicId,

      value: buffer,

      success: function (res) { 

      }

    })

  },
  f11: function () {
    var that = this
   
      if (that.data.kongtiao_index == 0) {
        wx.setStorageSync('kongtiao_key', 1)
        that.setData({ kongtiao_index: 1 })
        that.formSubmit('1011');
        wx.showToast({
          title: "已打开",
          icon: 'sucess',
          mask: true,
          duration: 2000
        });
      }
 else{ 
        wx.setStorageSync('kongtiao_key', 0)
        that.setData({ kongtiao_index: 0 })
        that.formSubmit('1010');
        wx.showToast({
          title: "已关闭",
          icon: 'sucess',
          mask: true,
          duration: 2000
        });
      }
    
   
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
     this.onLoad()
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

  }
})