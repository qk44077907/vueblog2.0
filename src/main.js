import Vue from '../lib/vue.min';
import App from './App';
//import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import contentHome from './components/content-home.vue';
import contentArchive from './components/content-archive.vue';
import contentTag from './components/content-tag.vue';
import contentCate from './components/content-cate.vue';
import contentAbout from './components/content-about.vue';
import filteredArticles from './components/filtered-articles.vue'

Vue.use(VueRouter);

/*router.redirect(
    {
        '*': '/'
    }
);*/


// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {path: '/', component: contentHome},
    {path: '/page/:count', name: 'page', component: contentHome},
    {path: '/archive/:count', name: 'archive', component: contentArchive},
    {path: '/cate', name: 'cate', component: contentCate},
    {path: '/tag', name: 'tag', component: contentTag},
    {path: '/about', name: 'about', component: contentAbout},
    {path: '/search/:count', name: 'search', component: filteredArticles},
    {path: '/:filterField/:filterName/:count', name: 'filtered', component: filteredArticles},

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes: [
        {path: '/', component: contentHome},
        {path: '/page/:count', name: 'page', component: contentHome},
        {path: '/archive/:count', name: 'archive', component: contentArchive},
        {path: '/cate', name: 'cate', component: contentCate},
        {path: '/tag', name: 'tag', component: contentTag},
        {path: '/about', name: 'about', component: contentAbout},
        {path: '/search/:count', name: 'search', component: filteredArticles},
        {path: '/:filterField/:filterName/:count', name: 'filtered', component: filteredArticles},
    ]
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
    router,
    el: '#app',
    template: '<app></app>',
    components: {App}
})