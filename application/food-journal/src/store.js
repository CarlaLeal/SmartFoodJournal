import Vue from 'vue';
import Vuex from 'vuex';
import router from './router.js';

Vue.use(Vuex);

export default new Vuex.Store({
	  state: {
        email: "",
        userToken: ""
	  },
	  mutations: {
        authUser(state, userData) {
            state.email = userData.email,
            state.userToken = userData.userToken
        }
	  },
    actions: {
        login({commit}, authData) {
            commit('authUser', {
                "email": authData.email,
                "userToken": "xSHj"
            })
            router.push('/home')
        }
    }
})
