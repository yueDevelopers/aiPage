<template>
  <div class="container">
    <textarea class="ask" placeholder="请输入问题" v-model="question" />
    <button class="btn" @click="ask">提交</button>
    <textarea class="ask" placeholder="回答" v-model="answer" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
/* eslint-disable */
const question = ref("");
const answer = ref("");
const ask = async () => {
  const res = await axios.post("/api/meal/getMenu", {
    ask: question.value,
  });
  answer.value = res.data.menu.text;
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
}
.ask {
  flex: 1;
  margin: 10px;
}
.btn {
  width: 100px;
  align-self: center;
}
</style>
