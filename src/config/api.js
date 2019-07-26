const HOST = process.env.HOST
const api = {
  // 设置的请求host地址
  HOST,
  // 获取位置
  GET_ADRESS: `${HOST}/getAdress`,

  // 获取天气信息
  GET_WEATHER: `${HOST}/vue/server/home.php?inAjax=1&do=getWeather`,

  // 获取bing壁纸
  GET_BING_IMAGE: `${HOST}/getImageByBingJson`,

  // 获取个人首页图片集合
  GET_MINE_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getHomeImage`,

  // 获取个人所有的图片信息
  GET_ALL_MINE_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getAllImage`,

  // 获取笑话数据
  GET_JOKE: `${HOST}/vue/server/home.php?inAjax=1&do=getJokeInfo`,

  // 获取新闻信息
  GET_NEWS_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getNewsInfo`,

  // 获取资源信息中音频地址
  GET_RESOURCE_AUDIO: `${HOST}/vue/server/home.php?inAjax=1&do=getResourceAudio`,

  // 获取资源信息中视频地址
  GET_RESOURCE_VIDEO: `${HOST}/vue/server/home.php?inAjax=1&do=getResourceVideo`,

  // 获取网址更新内容
  GET_WEB_UPDATE_INFO: `${HOST}/vue/server/home.php?inAjax=1&do=getUpdateInfo`,

  // 判断是否要更新 在弹窗提示的时候使用
  IS_NEED_UPDATE: `${HOST}/isNeedUpdate`,

  // 更新注册信息
  UPDATE_SINGIN_INFO: `${HOST}/updateUserInfo`,

  // 文件上传
  UPLOAD: `${HOST}/vue/server/upload.php`,

  // 更新用户信息
  UPDATE_USER_INFO: `${HOST}/vue/server/user.php?inAjax=1&do=updateUserInfo`,

  // 获取pic路由下图片的数据
  GET_PIC_IMAGE: `${HOST}/vue/server/home.php?inAjax=1&do=getImageCondition`,

  // 个人中心数据获取
  GET_PERSONAL_INFO: `${HOST}/show`,

  // 登陆
  LOGIN: `${HOST}/loginUser`,

  // 注册
  SINGIN: `${HOST}/registerUser`
}
export default api
