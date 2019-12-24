// pages/explore/explore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    indexs:0,
    hid:true,
    num:1,
    tsimg:[
      {
        src:'../image/tansuotx1.png'
      },
      {
        src: '../image/tansuotx2.png'
      },
      {
        src: '../image/tansuotx3.png'
      },
      {
        src: '../image/tansuotx4.png'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    hid:(options.hid=="true"?true:false)
  },
  changehid: function (n) {
    if (n.target.dataset.num==2){
     this.setData({
       index : this.data.index + 1,
       indexs:0
     })
    }
    if (n.target.dataset.num == 1) {
      this.setData({
        index: 0,
        indexs: this.data.indexs + 1
      })
    }
    if(this.data.index >=2){
      return
    }
    if (this.data.indexs >= 2) {
      return
    }

    this.setData({
      num: n.target.dataset.num,
      hid: !this.data.hid

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