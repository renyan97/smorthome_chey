/*
Tencent is pleased to support the open source community by making Face-2-Face Translator available.

Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.

Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
var serviceId = "0000ffe0-0000-1000-8000-00805f9b34fb"

var characteristicId = "0000ffe1-0000-1000-8000-00805f9b34fb"
const app = getApp()

const util = require('../../utils/util.js')

const plugin = requirePlugin("WechatSI")

import { language } from '../../utils/conf.js'


// 获取**全局唯一**的语音识别管理器**recordRecoManager**
const manager = plugin.getRecordRecognitionManager()


Page({
  data: {
    list:"",//数据库匹配命令
    match:[//基础命令
      {
        w:"1aa",
        a:"1011",
      },
      {
        w: "0aa",
        a: "1010",
      },
      {
        w: "1ab",
        a: "1021",
      },
      {
        w: "0ab",
        a: "1020",
      },
      {
        w: "1ac",
        a: "1031",
      },
      {
        w: "0ac",
        a: "1030",
      },
      {
        w: "1ad",
        a: "1041",
      },
      {
        w: "0ad",
        a: "1040",
      },
      {
        w: "0ae",
        a: "1100",
      },
      {
        w: "1ae",
        a: "1101",
      },
      {
        w: "2ae",
        a: "1101",
      },
      {
        w: "3ae",
        a: "1102",
      },
      {
        w: "1af",
        a: "1103",
      },
      {
        w: "0ag",
        a: "1100",
      },
      {
        w: "1ag",
        a: "1104",
      },
      {
        w: "2ag",
        a: "1104",
      },
      {
        w: "3ag",
        a: "1105",
      },
      {
        w: "4ag",
        a: "1104",
      },
      {
        w: "0ah",
        a: "1100",
      },
      {
        w: "1ah",
        a: "1107",
      },
      {
        w: "2ah",
        a: "1107",
      },
      {
        w: "3ah",
        a: "1108",
      },
      {
        w: "4ah",
        a: "1108",
      },
      {
        w: "0al",
        a: "1100",
      },
      {
        w: "1al",
        a: "1109",
      },
      {
        w: "2al",
        a: "1109",
      },
      {
        w: "3al",
        a: "1110",
      },
      {
        w: "4al",
        a: "1109",
      },
      {
        w: "1am",
        a: "1111",
      },
      {
        w: "1am",
        a: "t",
      },
      {
        w: "4am",
        a: "1112",
      },
      {
        w:'1ak',
        a:"1114",
      },
      {
        w:"0ak",
        a:"1115",
      }
    ],
    dictionary:[//动词匹配词典
      {
        word:["开","启"],
        id:"1",
      },  
      {
        word:["关","闭"],
        id:"0",
      },
      {
        word:["亮"],
        id:"2",
      },
      {
        word:["暗"],
        id:"3",
      },
      {
        word: ["更换为","更改为"],
        id: "4",
      }
    ],
    privative:["不","禁","勿","莫"],//否定词匹配
    lexicon:[//名词匹配
      {
          word:"阳台灯",
          id:"aa"
     },
     {
       word:"卧室灯",
       id:"ab",
     },
      {
        word: "浴室灯",
        id: "ac",
      },
      {
        word: "厨房灯",
        id: "ad",
      },
      {
        word: "客厅灯",
        id: "ae",
      },
      {
        word: "客厅灯",
        id: "ab",
      },
      {
        word: "彩色灯",
        id: "af",
      },
      {
        word: "黄色灯",
        id: "ag",
      },
      {
        word: "紫色灯",
        id: "ah",
      },
      {
        word: "粉色灯",
        id: "al",
      },
      {
        word: "音乐灯",
        id: "am",
      },
      {
        word: "所有灯",
        id: "ak",
      },
  
    ],
    dialogList:
     [
      // {
      //   // 当前语音输入内容
      //   create: '04/27 15:37',
      //   lfrom: 'zh_CN',
      //   lto: 'en_US',
      //   text: '这是测试这是测试这是测试这是测试',
      //   translateText: 'this is test.this is test.this is test.this is test.',
      //   voicePath: '',
      //   translateVoicePath: '',
      //   autoPlay: false, // 自动播放背景音乐
      //   id: 0,
      // },
    ],
    scroll_top: 10000, // 竖向滚动条位置

    bottomButtonDisabled: false, // 底部按钮disabled

    tips_language: language[0], // 目前只有中文

    initTranslate: {
      // 为空时的卡片内容
      create: '04/27 15:37',
      text: '等待说话',
    },

    currentTranslate: {
      // 当前语音输入内容
      create: '04/27 15:37',
      text: '等待说话',
    },
    recording: false,  // 正在录音
    recordStatus: 0,   // 状态： 0 - 录音中 1- 翻译中 2 - 翻译完成/二次翻译

    toView: 'fake',  // 滚动位置
    lastId: -1,    // dialogList 最后一个item的 id
    currentTranslateVoice: '', // 当前播放语音路径

  },


  /**
   * 按住按钮开始语音识别
   */
  streamRecord: function(e) {
    // console.log("streamrecord" ,e)
    let detail = e.detail || {}
    let buttonItem = detail.buttonItem || {}
    manager.start({
      lang: buttonItem.lang,
    })

    this.setData({
      recordStatus: 0,
      recording: true,
      currentTranslate: {
        // 当前语音输入内容
        create: util.recordTime(new Date()),
        text: '正在聆听中',
        lfrom: buttonItem.lang,
        lto: buttonItem.lto,
      },
    })
    this.scrollToNew();

  },


  /**
   * 松开按钮结束语音识别
   */
  streamRecordEnd: function(e) {

    // console.log("streamRecordEnd" ,e)
    let detail = e.detail || {}  // 自定义组件触发事件时提供的detail对象
    let buttonItem = detail.buttonItem || {}

    // 防止重复触发stop函数
    if(!this.data.recording || this.data.recordStatus != 0) {
      console.warn("has finished!")
      return
    }

    manager.stop()

    this.setData({
      bottomButtonDisabled: true,
    })
  },


  /**
   * 翻译
   */
  translateText: function(item, index) {
    let lfrom =  item.lfrom || 'zh_CN'
    let lto = item.lto || 'en_US'

    plugin.translate({
      lfrom: lfrom,
      lto: lto,
      content: item.text,
      tts: true,
      success: (resTrans)=>{

        let passRetcode = [
          0, // 翻译合成成功
          -10006, // 翻译成功，合成失败
          -10007, // 翻译成功，传入了不支持的语音合成语言
          -10008, // 翻译成功，语音合成达到频率限制
        ]

        if(passRetcode.indexOf(resTrans.retcode) >= 0 ) {
          let tmpDialogList = this.data.dialogList.slice(0)

          if(!isNaN(index)) {

            let tmpTranslate = Object.assign({}, item, {
              autoPlay: true, // 自动播放背景音乐
              translateText: resTrans.result,
              translateVoicePath: resTrans.filename || "",
              translateVoiceExpiredTime: resTrans.expired_time || 0
            })

            tmpDialogList[index] = tmpTranslate


            this.setData({
              dialogList: tmpDialogList,
              bottomButtonDisabled: false,
              recording: false,
            })

            this.scrollToNew();

          } else {
            console.error("index error", resTrans, item)
          }
        } else {
          console.warn("翻译失败", resTrans, item)
        }

      },
      fail: function(resTrans) {
        console.error("调用失败",resTrans, item)
        this.setData({
          bottomButtonDisabled: false,
          recording: false,
        })
      },
      complete: resTrans => {
        this.setData({
          recordStatus: 1,
        })
        wx.hideLoading()
      }
    })

  },

  

  /**
   * 修改文本信息之后触发翻译操作
   */
  translateTextAction: function(e) {
    // console.log("translateTextAction" ,e)
    let detail = e.detail  // 自定义组件触发事件时提供的detail对象
    let item = detail.item
    let index = detail.index

    this.translateText(item, index)



  },

  /**
   * 语音文件过期，重新合成语音文件
   */
  expiredAction: function(e) {
    let detail = e.detail || {}  // 自定义组件触发事件时提供的detail对象
    let item = detail.item || {}
    let index = detail.index

    if(isNaN(index) || index < 0) {
      return
    }

    let lto = item.lto || 'en_US'

    plugin.textToSpeech({
      lang: lto,
      content: item.translateText,
      success: resTrans => {
        if(resTrans.retcode == 0) {
          let tmpDialogList = this.data.dialogList.slice(0)

          let tmpTranslate = Object.assign({}, item, {
            autoPlay: false, // 自动播放背景音乐
            translateVoicePath: resTrans.filename,
            translateVoiceExpiredTime: resTrans.expired_time || 0
          })

          tmpDialogList[index] = tmpTranslate


          this.setData({
            dialogList: tmpDialogList,
          })

        } else {
          console.warn("语音合成失败", resTrans, item)
        }
      },
      fail: function(resTrans) {
        console.warn("语音合成失败", resTrans, item)
      }
  })
  },

  /**
   * 初始化为空时的卡片
   */
  initCard: function () {
    let initTranslateNew = Object.assign({}, this.data.initTranslate, {
      create: util.recordTime(new Date()),
    })
    this.setData({
      initTranslate: initTranslateNew
    })
  },


  /**
   * 删除卡片
   */
  deleteItem: function(e) {
    // console.log("deleteItem" ,e)
    let detail = e.detail
    let item = detail.item

    let tmpDialogList = this.data.dialogList.slice(0)
    let arrIndex = detail.index
    tmpDialogList.splice(arrIndex, 1)

    // 不使用setTImeout可能会触发 Error: Expect END descriptor with depth 0 but get another
    setTimeout( ()=>{
      this.setData({
        dialogList: tmpDialogList
      })
      if(tmpDialogList.length == 0) {
        this.initCard()
      }
    }, 0)

  },


  /**
   * 识别内容为空时的反馈
   */
  showRecordEmptyTip: function() {
    this.setData({
      recording: false,
      bottomButtonDisabled: false,
    })
    wx.showToast({
      title: this.data.tips_language.recognize_nothing,
      icon: 'success',
      image: '/image/no_voice.png',
      duration: 1000,
      success: function (res) {

      },
      fail: function (res) {
        console.log(res);
      }
    });
  },
  match: function (currentData,length,e)
  {
    if (wx.getStorageSync('deviceconnected')) { }
    else {
      return "Please connect to Bluetooth first"
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

      console.log("匹配函数")
      var d_id=-1  //动词指令
      var l_id=-1  //名词指令
      var text=e
      var that=this
      var d=that.data.dictionary
      var l=that.data.lexicon
      var p=that.data.privative
      var h0 = text.indexOf('我教你')//取 我教你 数组下标
      console.log(h0)
      if (h0 != -1) {
      console.log("ok")
      var h1 = text.indexOf("就是")//取 就是数组下标
      var h2 = text.substring(h0 + 3, h1-1)+'。'//截取第一部分
      console.log(h2)
      var h3 = text.substring(h1 + 2, text.length)//截取第二部分
      console.log(h3)
     //搜索已有命令
        outer:
        for (var i = 0; i < d.length; i = i + 1) {
          for (var j = 0; j < d[i].word.length; j = j + 1) {
            if (text.indexOf(d[i].word[j]) != -1) {
              d_id = d[i].id
              break outer
            }
          }
        }

        for (var i = 0; i < l.length; i = i + 1) {
          if (text.indexOf(l[i].word) != -1) {
            l_id = l[i].id
            break
          }
        }

        for (var i = 0; i < p.length; i = i + 1) {
          if (text.indexOf(p[i]) != -1) {
            if (d_id == 1)
              d_id = 0
            if (d_id == 0)
              d_id = 1
            if (d_id == 2)
              d_id = 3
            if (d_id == 3)
              d_id = 2
          }
        }
        var w_order = d_id + l_id
        var temp =0//pipenjieguo

        for (var i = 0; i < that.data.match.length; i = i + 1) {
          if (w_order == that.data.match[i].w) {
            temp = that.data.match[i].a
            break
          }

        }
         console.log(temp)
         if(temp!=0)
          this.f3(temp,h2)
          else{
            wx.showToast({
              title: '学习失败',
              icon: 'fail',
              duration: 2000
            })
         
          }
       
    }

    else{
      outer:
          for(var i=0;i<d.length;i=i+1)
          {
            for(var j=0;j<d[i].word.length;j=j+1)
            {
              if(text.indexOf(d[i].word[j])!=-1)
              {
                d_id=d[i].id
                break outer
              }
            }
          }
      
       for(var i=0;i<l.length;i=i+1)
       {
         if(text.indexOf(l[i].word)!=-1)
         {
           l_id=l[i].id
           break
         }
       }
        
       for(var i=0;i<p.length;i=i+1)
       {
         if(text.indexOf(p[i])!=-1)
         {
           if(d_id==1)
            d_id=0
            if(d_id==0)
            d_id=1
           if(d_id==2)
             d_id=3
           if(d_id==3)
             d_id=2
         }
       }
       var w_order=d_id+l_id
       var temp=0
 

       for(var i=0;i<that.data.match.length;i=i+1)
       {
         if(w_order==that.data.match[i].w)
         {
           temp=1
           that.formSubmit(that.data.match[i].a) 
           break
         }
       
       }
      
       console.log("temp:"+temp)
       if(temp==0)//如果本地没有匹配到，则进行网络习惯匹配 
         this.f2(currentData, length,text)      //网络匹配成功返回1 
      
    
      if(temp==1)
      {
         
       if(d_id==1)
         this.hecheng(currentData, length, "Already open for you")
       
       if(d_id==0)
         this.hecheng(currentData, length, "Okay, it's closed.")
        
    
     
      }}
  },
  f3: function (a, w)
  {
    var that = this

    wx.showToast({
      title: ' 正在学习中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: `https://1oubm229.qcloud.la/weapp/matchin`,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        w_order:w,
        a_order:a
      },
      login: false,
      success(result) {
        wx.showToast({
          title: '学习成功',
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
      }})
  },
  f2: function (currentData, length,w_order) {
     
    var promise = new Promise((resolve, reject) => {
    var that = this
   
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: `https://1oubm229.qcloud.la/weapp/match`,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        order:w_order
      },
      login: false,
      success(result) {
     
        that.setData({
          list: result.data 
        })
      console.log("网络查询结果")
      
        if (that.data.list.data.length>0)
        {
          console.log(that.data.list.data[0].a_order) 
          that.formSubmit(that.data.list.data[0].a_order)
          that.hecheng(currentData, length, "I have finished it for you")
        }
        else{
          that.hecheng(currentData, length, "  If I don't, you can teach me")
         
        }
  
      },
      fail(error) { 
        wx.showToast({
          title: '检查网络',
          icon: 'fail',
          duration: 1000
        })
      }
    })
    
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
  /**
   * 初始化语音识别回调
   * 绑定语音播放开始事件
   */
  initRecord: function() {
    //有新的识别内容返回，则会调用此事件
    manager.onRecognize = (res) => {
      let currentData = Object.assign({}, this.data.currentTranslate, {
                        text: res.result,
                      })
      this.setData({
        currentTranslate: currentData,
      })
      this.scrollToNew();
    }

    // 识别结束事件
    manager.onStop = (res) => {

      let text = res.result
      console.log("识别结果")
      console.log(text)//这里是识别结果
                       //语义匹配函数返回命令代码以及语音合成
      if(text == '') {
        this.showRecordEmptyTip()
        return
      }

      let lastId = this.data.lastId + 1

      let currentData = Object.assign({}, this.data.currentTranslate, {
                        text: res.result,
                        translateText: '正在翻译中',
                        id: lastId,
                        voicePath: res.tempFilePath
                      })

      this.setData({
        currentTranslate: currentData,
        recordStatus: 1,
        lastId: lastId,
      })
  
        let tmpDialogList = this.data.dialogList.slice(0)
     
      tmpDialogList[this.data.dialogList.length] = currentData
 
      this.setData({
        dialogList: tmpDialogList,
        bottomButtonDisabled: false, 
        recording: false,
      })
      var c = this.match(currentData, this.data.dialogList.length,text)
      console.log("合成内容",c)
      //this.hecheng(currentData, this.data.dialogList.length,c)
      //this.translateText(currentData, this.data.dialogList.length)
    }

    // 识别错误事件
    manager.onError = (res) => {

      this.setData({
        recording: false,
        bottomButtonDisabled: false,
      })

    }

    // 语音播放开始事件
    wx.onBackgroundAudioPlay(res=>{

      const backgroundAudioManager = wx.getBackgroundAudioManager()
      let src = backgroundAudioManager.src

      this.setData({
        currentTranslateVoice: src
      })

    })
  },
  
 
  hecheng: function (item, index,c) {
    let lfrom = item.lfrom || 'zh_CN'
    let lto =  item.lto || 'en_US'
    console.log("翻译合成入口")
    console.log(lfrom+lto+item.text)
    plugin.translate({
      lfrom:  lto ,
      lto: lfrom,
      content:  c,// item.text, 语音合成文件
      tts: true,
  
      success: (resTrans) => {
        
        let passRetcode = [
          0, // 翻译合成成功
          -10006, // 翻译成功，合成失败
          -10007, // 翻译成功，传入了不支持的语音合成语言
          -10008, // 翻译成功，语音合成达到频率限制
        ]

        if (passRetcode.indexOf(resTrans.retcode) >= 0) {
          console.log(resTrans.retcode)
          let tmpDialogList = this.data.dialogList.slice(0)
          console.log(tmpDialogList)
          if (!isNaN(index)) {

            let tmpTranslate = Object.assign({}, item, {
              autoPlay: true, // 自动播放背景音乐
              translateText: "失败",//resTrans.result,
              translateVoicePath: resTrans.filename || "",
              translateVoiceExpiredTime: resTrans.expired_time || 0
            })    

            tmpDialogList[index] = tmpTranslate
            this.setData({
              dialogList: tmpDialogList,
            })
             
           
            
            this.scrollToNew();

          } else {
            console.error("index error", resTrans, item)
          }
        } else {
          console.warn("翻译失败", resTrans, item)
        }

      },
      fail: function (resTrans) {
        console.error("调用失败", resTrans, item)
        this.setData({
          bottomButtonDisabled: false,
          recording: false,
        })
      },
      complete: resTrans => {
        this.setData({
          recordStatus: 1,
        })
        wx.hideLoading()
      }
    })

  },

  /**
   * 设置语音识别历史记录
   */
  setHistory: function() {
    try {
      let dialogList = this.data.dialogList
      dialogList.forEach(item => {
        item.autoPlay = false
      })
      wx.setStorageSync('history',dialogList)

    } catch (e) {

      console.error("setStorageSync setHistory failed")
    }
  },

  /**
   * 得到历史记录
   */
  getHistory: function() {
    try {
      let history = wx.getStorageSync('history')
      if (history) {
          let len = history.length;
          let lastId = this.data.lastId
          if(len > 0) {
            lastId = history[len-1].id || -1;
          }
          this.setData({
            dialogList: history,
            toView: this.data.toView,
            lastId: lastId,
          })
      }

    } catch (e) {
      // Do something when catch error
      this.setData({
        dialogList: []
      })
    }
  },

  /**
   * 重新滚动到底部
   */
  scrollToNew: function() {
    this.setData({
      toView: this.data.toView
    })
  },

  onShow: function() {
    this.scrollToNew();

    this.initCard()

    if(this.data.recordStatus == 2) {
      wx.showLoading({
        // title: '',
        mask: true,
      })
    }

  },

  onLoad: function () {
    this.getHistory()
    this.initRecord()


    this.setData({toView: this.data.toView})


    app.getRecordAuth()
  },

  onHide: function() {
    this.setHistory()
  },
})
