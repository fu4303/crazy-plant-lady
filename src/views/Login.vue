<template>
  <CardWrapper>
    <v-card-title class="text-h5">Sign In</v-card-title>
    <v-form ref="form" lazy-validation>
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="password" v-model="password"></v-text-field>
      <v-btn @click="signIn()">Sign In</v-btn>
    </v-form>
    <hr class="mt-5" />
    <v-card-actions>
      New?
      <v-btn @click="redirectToRegister()">
        Create an account
      </v-btn>
    </v-card-actions>
  </CardWrapper>
</template>
<script>
import CardWrapper from '../components/CardWrapper';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  components: { CardWrapper },
  data() {
    return {
      email: null,
      password: null,
      validationErrors: [],
      firebaseError: '',
    };
  },
  methods: {
    ...mapActions(['signInAction']),
    signIn() {
      this.signInAction({ email: this.email, password: this.password });
    },
    redirectToRegister() {
      this.$router.push({ path: '/register' });
    },
  },
};
</script>
