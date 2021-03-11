import Vue from 'vue'
import Router from 'vue-router'
import login from '@/router/login'
import chatting from '@/router/chatting'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [login, chatting,
        {
            path: '*',
            name: 'Not Found',
            component: () => import('@/views/NotFound')
        }
    ]
})

export default router
