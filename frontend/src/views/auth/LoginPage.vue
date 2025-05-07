<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <img src="@/assets/logo.png" alt="Always Fit Logo" class="logo" />
        <h1>Login</h1>
        <p><strong>Olá!</strong></p>
        <p>Este é o ambiente seguro de login da Always Fit ®</p>
        <p class="login-access">Para acessar, informe suas credenciais.</p>
        <p v-if="errorMessage" class="msg-error"></p>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <input
          type="text"
          v-model="username"
          placeholder="E-mail"
          class="login-input"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Senha"
          class="login-input"
        />
        <button type="submit" class="login-button">Logar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';
import Footer from '../../components/Footer.vue';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    return { authStore, router };
  },
  methods: {
    handleLogin() {
      // const success = this.authStore.login(this.username, this.password);
  
      this.router.push('/dashboard');
      if (success) {
        this.router.push('/dashboard');
      } else {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.login-container {
  max-width: 100%;
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-header .logo {
  max-width: 150px;
  margin-bottom: 20px;
}

.login-header h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.login-header p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  text-align: left;
}

.login-access {
  margin-top: 25px;
  font-weight: bold;
  color: #000;
}

.login-header h1,
.login-header p strong {
  font-weight: bold;
  color: #000;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.login-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.login-button {
  background-color: #153B4E;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #003d4f;
}

.msg-error {
  color: red !important;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
}
</style>