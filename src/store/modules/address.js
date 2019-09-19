const state = {
    address: false
};
const getters = {
    address: state => state.address
};
const mutations = {
    setAddress: (state, address) => state.address = address
};
const actions = {
    setAddressAsync: ({ commit }, address) => commit("setAddress", address)
};

export default {
    state, getters, mutations, actions
}
