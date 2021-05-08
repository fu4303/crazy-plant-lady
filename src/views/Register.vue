<template>
  <CardWrapper>
    <v-card-title class="text-h5">Register</v-card-title>
    <v-form ref="form" lazy-validation>
      <v-text-field label="email"></v-text-field>
      <v-text-field label="password"></v-text-field>
      <v-text-field label="re-enter password"></v-text-field>
      <v-btn>Create Account</v-btn>
    </v-form>
  </CardWrapper>
</template>
<script>
import CardWrapper from '../components/CardWrapper';
export default {
  name: 'Register',
  components: { CardWrapper },
};
</script>
