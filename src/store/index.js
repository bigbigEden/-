import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex)


const state = {
	is_select:false, //是否选中
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})