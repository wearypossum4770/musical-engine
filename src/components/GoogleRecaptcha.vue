<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <button
        class="g-recaptcha"
        v-on:click="handleClick"
        data-sitekey="reCAPTCHA_site_key"
        data-callback="onSubmit"
        data-action="submit"
      >
        Submit
      </button>
      <button type="sbumit">REAL SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "GoogleRecaptcha",
  data() {
    return {
      reCAPTCHA_site_key: "6LeBJR0cAAAAAAa0AI2DzdV9QQcwijhfAtnC4iic",
      SECRET_reCAPTCHA_site_key: "6LeBJR0cAAAAAMgeIH3NU_GBgpGv3MuuSiVk069P",
    };
  },
  methods: {
    onSubmit() {
      console.log("I'm submitted");
    },
    handleClick(e) {
      e.preventDefault();
      grecaptcha.ready(function () {
        grecaptcha
          .execute("reCAPTCHA_site_key", { action: "submit" })
          .then(function (token) {
            // Add your logic to submit to your backend server here.
          });
      });
      console.log("I'm clicked");
    },
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js",
    );
    document.head.appendChild(externalScript);
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
