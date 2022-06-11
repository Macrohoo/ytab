//首次相关数据前置守卫
//服务端数据库中配置变量、本地json数据
import wallpaper from '@/json/wallpaper.json'

//抽象类是不允许被实例化
export default abstract class DataBeforeGuard {
  static initWp() {
    localStorage.setItem('WALLPAPER-PICTURE', JSON.stringify(wallpaper.img))
    localStorage.setItem('WALLPAPER-VIDEO', JSON.stringify(wallpaper.video))
  }
}
