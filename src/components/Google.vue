<template>
  <div>
    <form id="demo-form" v-on:submit.prevent="onSubmit">
      <vue-recaptcha sitekey="6LdniR0cAAAAAAkBg_LR4cxCXVPYeOSZUp2bOg_Q">
        <button>Click me</button>
      </vue-recaptcha>
    </form>
  </div>
</template>

<script>
// 6LdniR0cAAAAAAkBg_LR4cxCXVPYeOSZUp2bOg_Q client
// 6LdniR0cAAAAAKylKnAGo5qOye-ZIBIYoszvlCKD server secret
import VueRecaptcha from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
};
</script>

<style scoped></style>
