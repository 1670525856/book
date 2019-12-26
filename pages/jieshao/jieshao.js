// pages/jieshao/jieshao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    hid:false,
    list:[
      {
        src:'/pages/image/fenxiang1.png'
      }, {
        src: '/pages/image/fenxiang2.png'
      }, {
        src: '/pages/image/fenxiang3.png'
      }, {
        src: '/pages/image/fenxiang4.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  btn:function(n){
    this.setData({
      show: !this.data.show
    })

  },
  fx: function (n) {
    this.setData({
      hid: !this.data.hid
    })

  },
  onLoad: function (options) {

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