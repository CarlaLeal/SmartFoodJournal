import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);
const routes = [
	  {
		    path: "/login",
		    component: Login
	  },
	  {
		    path: "/home",
		    component: HelloWorld
	  }

]

const router = new VueRouter({
	  mode: "history",
	  routes,
});

export default router;
