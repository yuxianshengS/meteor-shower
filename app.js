//app.js
App({
  onLaunch() {
    // this.bg_music();
  },
  bg_music() {
    const bg_music = wx.getBackgroundAudioManager();
    bg_music.title = 'one by one'; //音乐名
    bg_music.singer = 'Enya'; //作者名
    bg_music.epname = 'The Very Best Of Enya'; //专辑名
    bg_music.coverImgUrl = 'https://www.zhai78.com/usr/uploads/2020/01/1946191900.jpg'; //封面地址
    bg_music.src = 'https://www.zhai78.com/usr/uploads/2020/01/one_by_one.mp3'; //音乐地址
    bg_music.onEnded(() => {
      const bg_music = wx.getBackgroundAudioManager();
      bg_music.title = 'あの夏へ (回到那个夏天)'; //音乐名
      bg_music.singer = '久石让 (ひさいし じょう)'; //作者名
      bg_music.epname = '千と千尋の神隠し サウンドトラック'; //专辑名
      bg_music.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000038JOTF1Nh9Du_1.jpg?max_age=2592000'; //封面地址
      bg_music.src = 'https://api.bituinet.com/group1/M00/00/00/rBpkR1_z8FKASK7rAEJ77x7Wzt8506.mp3'; //音乐地址
    })
  },
})