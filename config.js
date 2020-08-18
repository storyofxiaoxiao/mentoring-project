const config = {}; //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case "development":
    config.BASE_URL = 'http://127.0.0.1' //这里是本地的请求
    break;
  case "test":
    config.BASE_URL = "http://127.0.0.1" // 测试环境
    break;
  case "production":
    config.BASE_URL = "http://127.0.0.1" //生产环境`
    break;
}

export default config;