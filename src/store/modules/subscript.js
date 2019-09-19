const state = {
    subscript: Number
};
const getters = {
    subscript: state => state.subscript
};
const mutations = {
    setSubscript: (state, subscript) => state.subscript = subscript
};
const actions = {
    setSubscriptAsync: ({ commit }, subscript) => commit("setSubscript", subscript)
};

export default {
    state, getters, mutations, actions
}