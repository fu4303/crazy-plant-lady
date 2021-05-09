<template>
  <CardWrapper>
    <v-card-title class="text-h5">Register</v-card-title>
    <v-form ref="form" lazy-validation>
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="password" v-model="password"></v-text-field>
      <v-text-field label="re-enter password"></v-text-field>
      <v-btn @click="signup()">Create Account</v-btn>
    </v-form>
  </CardWrapper>
</template>
<script>
import CardWrapper from '../components/CardWrapper';
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  components: { CardWrapper },
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      validationErrors: [],
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    signup() {
      this.signupAction({ email: this.email, password: this.password });
    },
  },
};
</script>
