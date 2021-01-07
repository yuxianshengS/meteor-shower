//index.js
//获取应用实例
const app = getApp()
const myaudio = wx.createInnerAudioContext();
Page({
  data: {
    is_music: true,
    starList: [],
    top: 0,
    left: 0,
  },
  onLoad: function () {
    let that = this
    setInterval(() => {
      that.data.starList = []
      for (var i = 0; i < Math.ceil(Math.random() * 2); i++) {
        let arr = []
        that.data.starList.push({ name: `star${i}`, top: that.randomDistance(350, -100), left: that.randomDistance(600, -100) })
        arr = that.data.starList
        that.setData({
          starList: arr
        })
        var stars = wx.createSelectorQuery();
        stars.select(`#stars${i}`).boundingClientRect()
      }
    }, 4000)
  },

  onShow: function () {
    myaudio.src = "https://www.zhai78.com/usr/uploads/2020/01/one_by_one.mp3"
    myaudio.play();
    myaudio.onEnded(() => {
      myaudio.src = "https://api.bituinet.com/group1/M00/00/00/rBpkR1_z8FKASK7rAEJ77x7Wzt8506.mp3"
      myaudio.play();
    })
  },

  stopMusic() {
    this.setData({
      is_music: !this.data.is_music
    })
    if (this.data.is_music) {
      myaudio.play();
    } else {
      myaudio.pause();
    }
  },

  goToEntering() {
    wx.navigateTo({
      url: '/pages/entering/entering',
    })
  },

  randomDistance(max, min) {
    var distance = Math.floor(Math.random() * (max - min + 1) + min)
    return distance
  }
})
