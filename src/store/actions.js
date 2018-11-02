export default {
	async check_select({commit},is_select){
		await commit('changeSelect',is_select)
	}
}