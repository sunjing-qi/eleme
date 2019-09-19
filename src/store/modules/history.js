const state = {
    history: false
};
const getters = {
    history: state => state.history
};
const mutations = {
    setHistory: (state, history) => state.history = history
};
const actions = {
    setLoadingAsync: ({ commit }, history) => commit("setHistory", history)
};

export default {
    state, getters, mutations, actions
}
