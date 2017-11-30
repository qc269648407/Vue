<template>
  <div class="test2">
    <div>这是第二个组件第{{num}}个，点击了{{myData}}次,传递来的数据是{{tanData}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myData: 0,
      tanData: ''
    }
  },
  props:['num'],
  methods:{
    add(){
      this.myData++;
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
