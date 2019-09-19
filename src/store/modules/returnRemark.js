const state = {
    remark: ""
};
const getters = {
    remark: state => state.remark
};
const mutations = {
    setRemark: (state, remark) => state.remark = remark
};
const actions = {
    setRemarkAsync: ({ commit }, remark) => commit("setRemark", remark)
};

export default {
    state, getters, mutations, actions
}