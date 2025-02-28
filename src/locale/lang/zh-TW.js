export default {
  common: {
    play: '播放',
    songs: '首歌',
  },
  nav: {
    home: '首頁',
    explore: '發現',
    library: '音樂庫',
    search: '搜尋',
    github: 'GitHub Repo',
  },
  home: {
    recommendPlaylist: '推薦歌單',
    recommendArtist: '推薦藝人',
    newAlbum: '新曲上架',
    seeMore: '查看全部',
    charts: '排行榜',
  },
  library: {
    sLibrary: '的音樂庫',
    likedSongs: '我喜歡的音樂',
    sLikedSongs: '喜歡的音樂',
    playlists: '歌單',
    albums: '專輯',
    artists: '藝人',
    mvs: 'MV',
    newPlayList: '新增歌單',
    userProfileMenu: {
      settings: '設定',
      logout: '登出',
    },
  },
  explore: {
    explore: '探索',
    loadMore: '載入更多',
  },
  artist: {
    latestRelease: '最新發佈',
    popularSongs: '熱門歌曲',
    showMore: '顯示更多',
    showLess: '收起',
    EPsSingles: 'EP 和單曲',
    albums: '專輯',
    withAlbums: '張專輯',
    artist: '藝人',
    videos: '個 MV',
    following: '正在追蹤',
    follow: '追蹤',
  },
  album: {
    released: '發行於',
  },
  playlist: {
    playlist: '歌單',
    updatedAt: '最後更新於',
    search: '搜尋歌單內音樂',
  },
  login: {
    accessToAll: '可存取全部資料',
    loginText: '登入網易雲帳戶',
    search: '搜尋網易雲帳戶',
    readonly: '只能讀取帳戶公開資料',
    usernameLogin: '使用者名稱登入',
    searchHolder: '請輸入您的網易雲使用者名稱',
    enterTip: '按 Enter 搜尋',
    choose: '在選單中選擇你的帳戶',
    confirm: '確認',
    countryCode: '國際區碼',
    phone: '手機號碼',
    email: 'Email',
    password: '密碼',
    login: '登入',
    loginWithEmail: '信箱登入',
    loginWithPhone: '手機號碼登入',
    notice: `YesPlayMusic 承諾不會保存您的任何帳戶資訊到雲端。<br />
        您的密碼會在本地進行 MD5 加密後再傳輸到網易雲 API。<br />
        YesPlayMusic 並非網易雲官方網站，輸入帳戶資訊前請慎重考慮。 您也可以前往
        <a href="https://github.com/qier222/YesPlayMusic"
          >YesPlayMusic 的 GitHub 原始碼 Repo</a
        >
        自行編譯並使用自託管的網易雲 API。`,
    noticeElectron: `您的密碼會在本地進行 MD5 加密後再傳輸到網易雲 API。<br />
        YesPlayMusic 不會傳輸你的帳戶資料到任何非網易雲音樂官方的伺服器。<br />`,
  },
  mv: {
    moreVideo: '更多影片',
  },
  next: {
    nowPlaying: '正在播放',
    nextUp: '即將播放',
  },
  player: {
    like: '喜歡',
    previous: '上一首',
    next: '下一首',
    repeat: '循環播放',
    repeatTrack: '單曲循環',
    shuffle: '隨機播放',
    play: '播放',
    pause: '暫停',
    mute: '靜音',
    nextUp: '播放清單',
  },
  modal: {
    close: '關閉',
  },
  search: {
    artist: '藝人',
    album: '專輯',
    song: '歌曲',
    mv: '影片',
    playlist: '歌單',
    noResult: '暫無結果',
    searchFor: '搜尋',
  },
  settings: {
    settings: '設定',
    logout: '登出',
    language: '語言',
    musicQuality: {
      text: '音質選擇',
      low: '普通',
      medium: '較高',
      high: '極高',
      lossless: '無損',
    },
    cacheLimit: {
      text: '歌曲快取上限',
      none: '無限制',
    },
    lyricFontSize: {
      text: '歌詞字體大小',
      small: '小',
      medium: '中',
      large: '大（預設）',
      xlarge: '超大',
    },
    deviceSelector: '音訊輸出裝置',
    permissionRequired: '需要麥克風權限',
    appearance: {
      text: '外觀',
      auto: '自動',
      light: '淺色',
      dark: '深色',
    },
    automaticallyCacheSongs: '自動快取歌曲',
    clearSongsCache: '清除歌曲快取',
    cacheCount: '已快取 {song} 首 ({size})',
    showLyricsTranslation: '顯示歌詞翻譯',
    minimizeToTray: '最小化到工作列角落',
    showPlaylistsByAppleMusic: '首頁顯示來自 Apple Music 的歌單',
    enableDiscordRichPresence: '啟用 Discord Rich Presence',
    enableGlobalShortcut: '啟用全域快捷鍵',
    showLibraryDefault: '啟動後顯示音樂庫',
    subTitleDefault: '副標題使用別名',
    lyricsBackground: {
      text: '顯示歌詞背景',
      off: '關閉',
      on: '開啟',
      dynamic: '動態（GPU 占用較高）',
    },
    closeAppOption: {
      text: '關閉主面板時...',
      ask: '詢問',
      exit: '退出',
      minimizeToTray: '最小化到工作列角落',
    },
  },
  contextMenu: {
    play: '播放',
    addToQueue: '新增至佇列',
    saveToMyLikedSongs: '新增至我喜歡的音樂',
    removeFromMyLikedSongs: '從喜歡的音樂中刪除',
    saveToLibrary: '新增至音樂庫',
    removeFromLibrary: '從音樂庫刪除',
    addToPlaylist: '新增至歌單',
    searchInPlaylist: '歌單內搜尋',
    copyUrl: '複製連結',
    allPlaylists: '全部歌單',
    minePlaylists: '我建立的歌單',
    likedPlaylists: '收藏的歌單',
  },
  toast: {
    savedToPlaylist: '已新增至歌單',
    removedFromPlaylist: '已從歌單中刪除',
    savedToMyLikedSongs: '已新增至我喜歡的音樂',
    removedFromMyLikedSongs: '已從喜歡的音樂中刪除',
    copied: '已複製',
    copyFailed: '複製失敗：',
    needToLogin: '此動作需要登入網易雲帳戶',
  },
};
