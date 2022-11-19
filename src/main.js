import Vue from 'vue';
import App from './App.vue';
import './assets/style.css';
import VueRouter from 'vue-router';
import ToDo from './pages/ToDo.vue';
import Home from './pages/Home.vue';

const routes = [
    { path: '/todo/:id', component: ToDo },
    { path: '/', component: Home },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    render: function (h) {
        return h(App);
    },
    router,
}).$mount('#app');
