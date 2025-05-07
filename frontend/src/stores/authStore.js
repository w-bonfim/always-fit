import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(username, password) {
      // Simulação de autenticação
      if (username === 'admin' && password === '1234') {
        this.user = { username };
        return true; // Login bem-sucedido
      }
      return false; // Falha no login
    },
    logout() {
      this.user = null;
    },
  },
});