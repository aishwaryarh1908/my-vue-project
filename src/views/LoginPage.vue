<template>
  <div class="background">
  <div class="login-container">
    <h3 v-if="user" class="welcome-message">Welcome to the Dashboard, {{ user.email }}</h3>
    <div v-else class="welcome-message"><h3>Welcome to the Dashboard</h3> Login to your Account</div>
    
    <label for="email" class="label">Email</label>
    <input v-model="email" id="email" placeholder="Enter your email" class="input-field" />
    
    <label for="password" class="label">Password</label>
    <div class="password-field">
      <input v-model="password" id="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter your password" class="input-field" />
      <button @click="togglePassword" class="toggle-password">{{ showPassword ? 'Hide' : 'Show' }}</button>
    </div>
    
    <button  @click="attemptLogin" class="login-button">Signin</button>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
    ...mapActions(['login']),
    
    attemptLogin() {
      const { email, password } = this;
      const success = this.login({ email, password });

      if (success) {
        this.$router.push('/dashboard'); // Redirect to dashboard on successful login
      } else {
        // Handle login error
      }
    },
    
    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>


<style scoped>
.background{
  
  display: flex;
  background: #ccc;
  height: 500px;
  align-items: center;
}
.login-container {
  max-width: 400px;
  height: 30vh;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 253, 253); 
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  background-color: #3498db;
  width: 100px;
  color: white;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #2980b9;
}

.label {
  text-align: left;
  font-weight: bold;
}

.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}


.label {
  text-align: left;
  font-weight: bold;
}

.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
