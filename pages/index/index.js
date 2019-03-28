Page({
  data: {
    _num : 1
  },
  navClick: function (e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
  tiao2: function() {
    wx.switchTab({
      url: '../uk/uk'
    })
  }


})
