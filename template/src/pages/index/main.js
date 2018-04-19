import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/style/base.css'
import '@/assets/style/base.less'

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
