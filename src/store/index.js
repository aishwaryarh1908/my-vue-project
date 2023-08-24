import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: [
      { email: "user1@example.com", password: "password1" },
      { email: "user2@example.com", password: "password2" },
      // Add more users as needed
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit, state }, { email, password }) {
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        commit("setUser", user);
        return true; // Successful login
      } else {
        return false; // Failed login
      }
    },
    logout({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
});
