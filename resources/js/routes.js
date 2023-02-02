import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import dei componenti che fungono da Pagine
import HomePage from './views/pages/HomePage.vue'
import AboutUs from './views/pages/AboutUs.vue'

import PostsIndex from './views/pages/posts/PostsIndex.vue'
import PostShow from './views/pages/posts/PostShow.vue'



const router = new VueRouter({
    //Scriverò tutti i miei path per le diverse pagine
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            // localhost:8000/posts
            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: PostShow
        }
    ]
});

export default router;