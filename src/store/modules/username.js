const state = {
    username: ""
};
const getters = {
    username: state => state.username
};
const mutations = {
    setUsername: (state, username) => state.username = username
};
const actions = {
    setUsernameAsync: ({ commit }, username) => commit("setUsername", username)
};

export default {
    state, getters, mutations, actions
}