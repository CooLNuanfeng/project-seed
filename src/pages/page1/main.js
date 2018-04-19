import Vue from 'vue'
import SignalHtml from './index.vue'

import '@/assets/style/base.css'
import '@/assets/style/base.less'

new Vue({
    el: '#app',
    components: { SignalHtml },
    template: '<SignalHtml/>'
})