import Vue from 'vue'
import Router from 'vue-router'
import IndexC from '../components/index'
import Router1 from "../components/router1"
import Router2 from "../components/router2"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexC
        },
        {
            path: '/router1',
            name: 'router1',
            component: Router1
        },
        {
            path: '/router2',
            name: 'router2',
            component: Router2
        }
    ]
})