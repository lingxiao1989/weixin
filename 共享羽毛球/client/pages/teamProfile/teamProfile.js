// pages/teamProfile/teamProfile.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetTeamID: "",
    teamInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      targetTeamID: app.globalData.targetTeamID,
      teamInfo: [{
        teamID: 1,
        teamImage: "../../common/image/team_on.png",
        teamName: "热血羽毛球，不服就干！",
        teamBrief: "街上",
        rating: { ratings: [1, 1, 1, 1, 1], score: 5 },
        members: 100
      }, {
        teamID: 2,
        teamImage: app.globalData.userInfo.avatarUrl,
        teamName: "作死队",
        teamBrief: "市政府屋顶",
        rating: { ratings: [1, 0, 0, 0, 0], score: 1 },
        score: 5,
        members: 3
      }]
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