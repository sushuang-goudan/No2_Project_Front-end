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
            },
            {
                path: '/shou-ye/hui-zong',
                name: 'Huizong',
                component: () =>
                    import('../components/adminforms/shouye/Huizong.vue')
            },
            {
                path: '/shou-shu/shu-ju',
                name: 'Shuju',
                component: () =>
                    import('../components/adminforms/shoushu/Shuju')
            },
            {
                path: '/shou-shu/bing-li',
                name: 'Bingli',
                component: () =>
                    import('../components/adminforms/shoushu/Bingli')
            },
            {
                path: '/nei-jing/shu-ju',
                name: 'Shuju',
                component: () =>
                    import('../components/adminforms/neijing/Shuju')
            },
            {
                path: '/nei-jing/bing-li',
                name: 'Bingli',
                component: () =>
                    import('../components/adminforms/neijing/Bingli')
            },
            {
                path: '/zong-he/shu-ju',
                name: 'Shuju',
                component: () =>
                    import('../components/adminforms/zonghe/Shuju')
            },
            {
                path: '/zong-he/bing-li',
                name: 'Bingli',
                component: () =>
                    import('../components/adminforms/zonghe/Bingli')
            },
            {
                path: '/sui-fang/shu-ju',
                name: 'Shuju',
                component: () =>
                    import('../components/adminforms/suifang/Shuju')
            },
            {
                path: '/sui-fang/bing-li',
                name: 'Bingli',
                component: () =>
                    import('../components/adminforms/suifang/Bingli')
            },
            {
                path: '/xi-tong/gong-gao',
                name: 'Gonggao',
                component: () =>
                    import('../components/adminforms/xitong/Gonggao')
            },
            {
                path: '/xi-tong/yong-hu',
                name: 'Yonghu',
                component: () =>
                    import('../components/adminforms/xitong/Yonghu')
            },
            {
                path: '/xi-tong/mi-ma',
                name: 'Mima',
                component: () =>
                    import('../components/adminforms/xitong/Mima')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router