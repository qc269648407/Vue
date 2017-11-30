<template>
  <div class="test">
    <div @click="clickCom(num)">这是第一个组件的第{{num}}个</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  props:['num'],
  methods:{
    clickCom(num){
      console.info('click '+num);//子组件自己的方法
      this.$emit('increment');//调用父组件方法
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
