<template>
  <div class="hello">
    <h3>{{count}}</h3>
    <div>
      <button @click="$store.commit('add',1)">增加1</button>
      <button @click="$store.commit('reduce')">减少1</button>
      <button @click="$store.commit('add',2)">增加2</button>
    </div>
  
    <div>
      <button @click="add(10)">增加10</button>
    </div>

    <div>
      <button @click="addAction(1)">增加1</button>
      <button @click="reduceAction()">减少1</button>
    </div>
  
  
    <!-- <button @click="clickAdd()">增加</button>
              <button @click="clickReduce()">减少</button> -->
  </div>
</template>

<script>
  //必须引入，调用数据使用
  import store from '../store/store'
  
  //引入可以简写函数的调用
  import {
    mapMutations,
    mapActions
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
      // count() {
      //   return this.$store.getters.count;
      // }//获取getter处理过的数据。每次数据变化时都会处理一次啊+100
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
    methods: mapActions([
      'addAction', 'reduceAction'
    ]),
    store
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
