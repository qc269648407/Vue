<template>
  <div class="hello">
    <h3>{{count}}</h3>
    <button @click="$store.commit('add',1)">增加1</button>
    <button @click="$store.commit('reduce')">减少1</button>
    <button @click="$store.commit('add',2)">增加2</button>
  
    <button @click="add(10)">增加1</button>
  
    <!-- <button @click="clickAdd()">增加</button>
      <button @click="clickReduce()">减少</button> -->
  </div>
</template>

<script>
  //必须引入，调用数据使用
  import store from '../store/store'
  
  //引入可以简写函数的调用
  import {
    mapMutations
  } from 'vuex';
  export default {
  
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
      clickAdd() {
        store.state.count++;
      },
      clickReduce() {
        store.state.count--;
      }
    },
    methods: mapMutations([
      'add', 'reduce'
    ]),
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
