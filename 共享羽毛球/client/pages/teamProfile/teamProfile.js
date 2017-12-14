const app = getApp()
// pages/teamProfile/teamProfile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetTeamID: "",
    Teams:[{
      teamID: 1,
      teamName: "神仙打架，不服就干",
      teamSize: 100,
      teamLocation: "天津滨海高新区华苑产业园鑫茂科技园",
      locationBrief: "街上",
      teamMember: [1, 2, 3, 4, 5],
      teamLeader: 1,
      teamPicture: ""
    }, {
      teamID: 2,
      teamName: "作死队",
      teamSize: 3,
      teamLocation: "天津市政府",
      locationBrief: "市政府屋顶",
      teamMember: [1, 2, 3],
      teamLeader: 1,
      teamPicture: ""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    _this.setData({
      targetTeamID: app.globalData.targetTeamID
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
  
  }
})