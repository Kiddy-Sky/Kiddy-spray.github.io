const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: true,
    //theme: #000000,
    mini: true,
    autoplay: true,
    audio: [
      {
        name: "斯德哥尔摩情人",
        artist: '陈奕迅',
        url: 'https://kiddy-spray.github.io/songs/斯德哥尔摩情人 -- 陈奕迅 .mp3',
      #  url: 'http://music.163.com/song/media/outer/url?id=27483204.mp3',
      },
      {
        name: '少女的祈祷',
        artist: '杨千嬅',
        url: 'http://music.163.com/song/media/outer/url?id=329593497.mp3',
      },
      {
        name: '钟无艳',
        artist: '谢安琪',
        url: 'http://music.163.com/song/media/outer/url?id=400074284.mp3',
      },
      {
        name: '倒刺',
        artist: '薛凯琪',
        url: 'http://music.163.com/song/media/outer/url?id=306763.mp3',
      },
      {
        name: '厌弃',
        artist: '许廷铿',
        url: 'http://music.163.com/song/media/outer/url?id=174120.mp3',
      },
      {
        name: '阁楼',
        artist: '陈慧琳',
        url: 'http://music.163.com/song/media/outer/url?id=213791.mp3',
      }
    ]
});