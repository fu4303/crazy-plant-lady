<template>
  <CardWrapper>
    <v-card-title class="text-h5">Sign In</v-card-title>
    <v-form ref="form" v-model="isValid">
      <v-text-field
        label="email"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="password"
        v-model="password"
        :error-messages="getError"
        :rules="passwordRules"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        required
      ></v-text-field>
      <v-btn class="mt-2" @click="validate()">Sign In</v-btn>
    </v-form>
    <hr class="mt-5" />
    <v-card-actions class="mt-2">
      New to CrazyPlantPerson?
      <v-btn class="ml-1" @click="redirectToRegister()">
        Create an account
      </v-btn>
    </v-card-actions>
  </CardWrapper>
</template>
<script>
import CardWrapper from '../components/CardWrapper';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Login',
  components: { CardWrapper },
  data() {
    return {
      isValid: false,
      email: null,
      password: null,
      showPassword: false,
      emailRules: [
        (value) => !!value || 'E-mail is required',
        (value) => /.+@.+/.test(value) || 'Please enter a valid email address',
      ],
      passwordRules: [
        (value) =>
          !!value || 'Oops...looks like you forgot to enter a password',
      ],
      firebaseError: '',
    };
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth', 'getError']),
  },
  methods: {
    ...mapActions(['signInAction']),
    async validate() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        await this.signInAction({ email: this.email, password: this.password });
        if (this.isUserAuth) {
          this.$router.push({ path: '/' });
        }
      }
    },
    redirectToRegister() {
      this.$router.push({ path: '/register' });
    },
  },
};
</script>
