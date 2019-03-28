Page({
  data: {
    _num : 1
  },
  navClick: function (e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    })
  },
})
