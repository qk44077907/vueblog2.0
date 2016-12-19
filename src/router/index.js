/**
 * Created by qiankn on 2016/11/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import tags from '../components/tags.vue';
import cates from '../components/cates.vue';
import preview from '../components/preview.vue';
import about from '../components/about.vue';
//import contentHome from '../components/preview.vue';
/*import timeLine from '../components/time-line.vue';


import filteredArticles from '../components/filtered-articles.vue'*/
Vue.use(VueRouter);


// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {path: '/',  redirect: '/preview/1'},
    {path: '/preview/:page(\\d+)', name: 'preview', component: preview},
    {path: '/list/:page(\\d+)', name: 'list', component: preview},//文章时间线
    {path: '/cates', name: 'cates', component: cates},
    {path: '/cates/:cateName/:page(\\d+)', name: 'sortByCate', component: preview},
    {path: '/tags', name: 'tags', component: tags},
    {path: '/tags/:tagName/:page(\\d+)', name: 'sortByTag', component: preview},
    {path: '/search/:searchText/:page(\\d+)', name: 'search', component: preview},
    {path: '/about', name: 'about', component: about},
    { path: '*', redirect: '/' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})


