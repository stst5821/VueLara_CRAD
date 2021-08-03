import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: ""
    },
    // acitionsで取得したデータを使い、mutationsを通して、stateを変更する。
    mutations: {
        setTasks: function(state, tasks) {
            state.tasks = tasks;
        }
    },
    // actionsでapiからデータ取得
    actions: {
        getTasks: function({ commit }) {
            axios.get("/api/tasks").then(res => {
                commit("setTasks", res.data);
            });
        }
    },
    modules: {}
});
