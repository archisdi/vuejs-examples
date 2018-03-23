import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import globalAxios from './global-axios';

import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, value) {
            state.user = value;
        },
        clearAuthData(state) {
            state.idToken = null;
            state.userId = null;
        }
    },
    actions: {
        signup({ commit, dispatch }, payload) {
            axios
                .post("/signupNewUser?key=AIzaSyDysfVBOoUEK3yB4Dxb_pkV_wmNge-oSxs", payload)
                .then(({ data }) => {
                    commit('authUser', { token: data.idToken, userId: data.localId });
                    dispatch('storeUser', data);
                })
                .catch(err => console.log(err));
        },
        signin({ commit }, payload) {
            axios
                .post(
                    "/verifyPassword?key=AIzaSyDysfVBOoUEK3yB4Dxb_pkV_wmNge-oSxs",
                    payload
                )
                .then(({ data }) => {
                    commit('authUser', { token: data.idToken, userId: data.localId });
                })
                .catch(err => console.log(err));
        },
        signout({ commit }) {
            commit('clearAuthData');
            router.replace('/signin');
        },
        fetchUser({ commit, state }) {
            globalAxios
                .get('/users.json?auth=' + state.idToken)
                .then(({ data }) => {
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user)
                    }
                    console.log(users);
                    commit('storeUser', users[0])
                })
                .catch(err => console.log(err));
        },
        storeUser({ commit, state }, payload) {
            if (!state.idToken) {
                return
            }
            globalAxios.post('/users.json?auth=' + state.idToken, payload)
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isAuthenticated(state) {
            return state.idToken !== null
        }
    }
})