import { createApp } from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './App.vue'
const app = createApp(App);

import '@/styles/index.scss' // global css
import '@/styles/flex-class.css' // 引入flex快写样式


//pinia
import { createPinia } from 'pinia'
app.use(createPinia())

//antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.use(Antd)

//svg-icon
import 'virtual:svg-icons-register' //引入雪碧图注册脚本，到这里雪碧图已经生成
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

//antd-icon
import AntdIcon from '@/icons/AntdIcon.vue'
app.component('AntdIcon', AntdIcon)

//router
import router from './router'

app.use(router).mount('#app');

