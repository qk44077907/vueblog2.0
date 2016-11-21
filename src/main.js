import Vue from 'vue';
import app from './App.vue';
import store from './store'
import router from './router'
import  {sync}  from 'vuex-router-sync'
// Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
sync(store, router);
new Vue({
    router,
    store,
    el: '#app',
    template: '<app></app>',
    components: {app}
})