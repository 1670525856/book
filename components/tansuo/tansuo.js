// components/tansuo/tansuo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    volume:[],
    dea: [
      {
      src: '/pages/image/tansuo21.png',
      name: '三体：死神永生'
    },
    {
      src: '/pages/image/tansuo22.png',
      name: '百年孤独'
    },
    {
      src: '/pages/image/tansuo23.png',
      name: '平凡的世界'
    },
    {
      src: '/pages/image/tansuo24.png',
      name: '未来简史'
    }
    ]
  },
  onLoad: function (options) {
    hid: (options.hid == "true" ? true : false),
      wx.request({
        url: 'https://wujunhui.xyz/getbooks',
        success: (res) => {
          this.setData({
            volume: res.data
          })
        }
      })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
