import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{ //门户---登录页面
        path: '/',
        name: 'LoginView',
        component: () =>
            import ('../views/LoginView.vue')
    },
    { //数据端口
        path: '/form',
        name: 'FormView',
        component: () =>
            import ('../components/forms/DataPort.vue'),
        children: [{
                path: '/form/shou-shu',
                name: 'ShouShu',
                component: () =>
                    import ('../components/dataforms/ShouShu.vue')
            },
            {
                path: '/form/nei-jing',
                name: 'NeiJing',
                component: () =>
                    import ('../components/dataforms/NeiJing.vue')
            },
            {
                path: '/form/zong-he',
                name: 'ZongHe',
                component: () =>
                    import ('../components/dataforms/ZongHe.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router