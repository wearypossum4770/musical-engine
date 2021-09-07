<template>
  <div>
    <form>
      <div id="container">
        1730.99/year 144.25/month
        <ul id="keyboard">
          <li @click="handleOnScreenNumPad" id="1" class="letter">1</li>
          <li @click="handleOnScreenNumPad" id="2" class="letter">2</li>
          <li @click="handleOnScreenNumPad" id="3" class="letter">3</li>
          <li @click="handleOnScreenNumPad" id="4" class="letter clearl">4</li>
          <li @click="handleOnScreenNumPad" id="5" class="letter">5</li>
          <li @click="handleOnScreenNumPad" id="6" class="letter">6</li>

          <li @click="handleOnScreenNumPad" id="7" class="letter clearl">7</li>
          <li @click="handleOnScreenNumPad" id="8" class="letter">8</li>
          <li @click="handleOnScreenNumPad" id="9" class="letter">9</li>
          <li @click="handleOnScreenNumPad" id="0" class="letter">0</li>
          <li class="switch"><s>abc</s></li>
          <li @click="handleSubmit" class="return">retur</li>
          <li @click="handleOnScreenBackspace" class="delete lastitem"><</li>
        </ul>
      </div>
    </form>
    <form @submit.prevent="handleSubmit">
      <div class="card">
        <img
          async="on"
          loading="lazy"
          src="@/assets/groceries/fruits/honey_crisp_apple.jpeg"
          alt="Avatar"
          style="width: 100%"
        />
        <div class="container">
          <input v-model="userInput" @focus="startTimer" />
          <button @click="handleSubmit">Enter</button>
          <p>{{ item.variety }} {{ item.commodity }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PLUCodes",
  computed: {
    isCorrect() {
      return this.item.code === this.userInput;
    },
  },
  methods: {
    calculateTime() {
      this.timeSpent = this.item.endTime - this.item.startTime;
    },
    handleOnScreenBackspace() {
      this.userInput = this.userInput.slice(0, -1);
    },
    handleOnScreenNumPad({ target }) {
      if (!this.timerStarted) {
        this.startTimer();
      }
      this.userInput += target.id;
    },
    handleSubmit() {
      this.endTimer();
      this.calculateTime();
    },
    startTimer() {
      this.item.startTime = new Date();
      this.timerStarted = true;
    },
    endTimer() {
      this.item.endTime = new Date();
      this.timerStarted = false;
    },
  },
  data() {
    return {
      timeSpent: 0,
      timerStarted: false,
      userInput: "",
      item: {
        code: "3283",
        category: "Fruits",
        image: "@/assets/groceries/fruits/honey_crisp_apple.jpeg",
        commodity: "apples",
        variety: "Honeycrisp",
        prices: [{ store: "walmart", price: 4.68, unit: "weight" }],
      },
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font: 71%/1.5 Verdana, Sans-Serif;
  background: #eee;
}
#container {
  margin: 100px auto;
  width: 760px;
}
#keyboard {
  margin: 0;
  padding: 0;
  list-style: none;
}
#keyboard li {
  float: left;
  margin: 0 5px 5px 0;
  width: 60px;
  height: 60px;
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  background: #fff;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
}
.capslock,
.tab,
.left-shift,
.clearl,
.switch {
  clear: left;
}
#keyboard .tab,
#keyboard .delete {
  width: 70px;
}
#keyboard .capslock {
  width: 80px;
}
#keyboard .return {
  width: 90px;
}
#keyboard .left-shift {
  width: 70px;
}

#keyboard .switch {
  width: 90px;
}
#keyboard .rightright-shift {
  width: 109px;
}
.lastitem {
  margin-right: 0;
}
.uppercase {
  text-transform: uppercase;
}
#keyboard .space {
  float: left;
  width: 556px;
}
#keyboard .switch,
#keyboard .space,
#keyboard .return {
  font-size: 16px;
}
.on {
  display: none;
}
#keyboard li:hover {
  position: relative;
  top: 1px;
  left: 1px;
  border-color: #e5e5e5;
  cursor: pointer;
}
</style>
