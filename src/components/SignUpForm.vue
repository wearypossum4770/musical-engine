<template>
  <div>
    <form
      v-on:keyup="enterPressed"
      v-on:submit="handleSubmit"
      style="border: 1px solid #ccc"
    >
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          autocomplete="email"
          placeholder="Enter Email"
          name="email"
        />
        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          autocomplete="new-password"
          placeholder="Enter Password"
          name="psw"
        />
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input
          type="password"
          autocomplete="new-password"
          placeholder="Repeat Password"
          name="psw-repeat"
        />
        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom: 15px"
          />
          Remember me
        </label>
        <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
        </p>
        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" v-on:click="registerUser" class="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Registration",
  data() {
    return {
      options: {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          id: "1",
          firstName: "Genryūsai",
          middleName: "Shigekuni",
          lastName: "Yamamoto",
          random: "something",
          password: "RzMdsJLufx2FvVi",
          email: "genryusai.shigekuni.yamamoto@soul.society.com",
          username: "genryusai.shigekuni.yamamoto",
        }),
      },
    };
  },
  methods: {
    enterPressed({ key, keyCode }) {
      if (key === "Enter" || keyCode === 13) {
        this.registerUser();
      }
    },
    // consider using axios instance for the vuex to pass url instead of entire url.
    async registerUser() {
      try {
        const resp = await fetch("http://localhost:3001/login/", this.options);
        if (resp.ok) {
          const response = await resp.json();
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    },
    handleSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>
