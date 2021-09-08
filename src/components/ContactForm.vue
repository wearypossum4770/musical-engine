<template>
  <div class="container">
    <h4>Contact</h4>
    <p>Questions? Go ahead.</p>
    <form @submit.prevent="handleSubmit" target="_blank">
      <p>
        <label for="fname">First Name: </label>
        <input type="text" v-model="firstName" placeholder="John" />
      </p>
      <p>
        <label for="lname">Last Name: </label>
        <input type="text" v-model="lastName" placeholder="Doe" />
      </p>
      <p>
        <label for="country-select">Country: </label>
        <select name="country" v-model="country" id="country-select">
          <option value="null">--Please choose an option--</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </p>
      <p>
        <label for="Email">Email: </label
        ><input
          type="email"
          placeholder="john.doe@example.com"
          v-model="email"
          required
        />
      </p>
      <p>
        <label for="Subject">Subject: </label
        ><input
          type="text"
          placeholder="I have a question."
          v-model="subject"
          required
        />
      </p>
      <p class="textareaField">
        <label for="Message">Message: </label
        ><textarea
          type="text"
          placeholder="Write something.."
          style="height: 200px"
          v-model="message"
          required
        ></textarea>
      </p>
      <button type="submit" class="w3-button w3-block w3-black">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      subject: "",
      message: "",
    };
  },
};
</script>
<style scoped>
.textareaField * {
  vertical-align: top;
}
</style>
