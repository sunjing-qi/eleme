const state = {
    orderId: Number
};
const getters = {
    orderId: state => state.orderId
};
const mutations = {
    setOrderId: (state, orderId) => state.orderId = orderId
};
const actions = {
    setOrderIdAsync: ({ commit }, orderId) => commit("setOrderId", orderId)
};

export default {
    state, getters, mutations, actions
}