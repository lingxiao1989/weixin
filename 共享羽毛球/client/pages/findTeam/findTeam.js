// pages/findTeam/findTeam.js
var QQMapWX = require('../../common/lib/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */

  data: {
    userInfo:null,
    hasUserInfo: false,
    pageWidth: "",
    pageHeight: "",
    latitude: "",
    longitude: "",
    markers: [{
      iconPath: "../../common/image/badminton.png",
      id: 1,
      latitude: 39.085258,
      longitude: 117.201883,
      width: 50,
      height: 50,
      callout: { content: "队伍名称: 作死队\n场地简述: 市政府屋顶\n人员数量: 3\n                点击查看详细", color: "#ffffff", fontSize: 14, padding: 10, borderRadius: 25, bgColor: "#fb9f3e", display:"BYCLICK"}
    },{
      iconPath: "../../common/image/badminton.png",
      id: 2,
      latitude: 39.08897,
      longitude: 117.11994,
      width: 50,
      height: 50,
      callout: { content: "队伍名称: 神仙打架，不服就干\n场地简述: 街上\n人员数量: 100\n                点击查看详细", color: "#ffffff", fontSize: 14, padding: 10, borderRadius: 25, bgColor: "#fb9f3e", display: "BYCLICK" }
    }],
    controls: [],
    circles: [],
    inputValue: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _this=this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          pageWidth: res.windowWidth,
          pageHeight: res.windowHeight,
          userInfo: app.globalData.userInfo,
          hasUserInfo: app.globalData.hasUserInfo
        })
      },
      fail: function(){
        _this.onLoad();
      }
    }),

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res.longitude, res.latitude);
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude, 
          controls: [{
            id: 1,
            iconPath: '../../common/image/myself.png',
            position: {
              left: _this.data.pageWidth * 0.05,
              top: _this.data.pageHeight * 0.05,
              width: 55,
              height: 55
            },
            clickable: true
          },{
            id: 2,
            iconPath: '../../common/image/my_location.png',
            position: {
              left: _this.data.pageWidth * 0.85,
              top: _this.data.pageHeight*0.05,
              width: 45,
              height: 45
            },
            clickable: true
          },{
            id: 3,
            iconPath: '../../common/image/createTeam.png',
            position: {
              left: _this.data.pageWidth * 0.85,
              top: _this.data.pageHeight * 0.05+45+10,
              width: 45,
              height: 45
            },
            clickable: true
            }
          ]
        })
        
      }
    }),

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'UUHBZ-5KLRP-P5PDS-LVOQK-B2J3Z-DMFHQ'
    });



  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // 调用接口
    // qqmapsdk.search({
    //   keyword: '酒店',
    //   success: function (res) {
    //     console.log(res.message,res.data);
    //   },
    //   fail: function (res) {
    //     console.log(res.status, res.message);
    //   },
    //   complete: function (res) {
    //     console.log(res.message, res );
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('teamMap');
    console.log(this.data.pageWidth, this.data.pageHeight);
  },

  wxSearchInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

  searchInput: function (e) {
    var _this = this;
    console.log(_this.data.inputValue);
    qqmapsdk.geocoder({
      address: _this.data.inputValue,
      success: function (res) {
        _this.setData({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        })
        
      },
      fail: function (res) {
        console.log("fail ",res);
        wx.showModal({
          title: '错误',
          content: '查询无结果,请更换查询地址',
          showCancel: false
        })
      },
      complete: function (res) {
        console.log("complete ",res);
      }
    });
  },

  clearInput: function (e) {
    this.setData({
      inputValue: ""
    })
  },

  regionchange(e) {
    console.log(e.type)
  },

  markertap(e) {
    console.log(e.markerId);
  },
  callouttap(e) {
    app.globalData.targetTeamID = e.markerId;
    wx.switchTab({
      url: '../teamProfile/teamProfile',
      success: function(e){
        var page=getCurrentPages().pop();
        if(page==undefined||page==null){return;}
        page.onLoad();
      }
    })
  },
  controltap(e) {
    //console.log(e.controlId);
    switch (e.controlId){
      case 1:
        wx.switchTab({
          url: '../userProfile/userProfile',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) { return; }
            page.onLoad();
          }
        })
        break;
      case 2:
        this.mapCtx.moveToLocation()
        break;
      case 3:
        wx.switchTab({
          url: '../createTeam/createTeam',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) { return; }
            page.onLoad();
          }
        })
        break;
    }
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