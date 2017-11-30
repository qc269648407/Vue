<template>
  <div class="hello">
    <div v-for="data in dataArr">
      <test :num="data" @increment="incrementTotal()">绑定动态数据 自定义调用父组件方法</test>
    </div>
    <test2 ref="child" num="1">绑定静态数据</test2>
    <button style="width:80px;height:20px;background:green;" @click="clickref()"></button>
  </div>
</template>

<script>
import test from './TestComponent'
import test2 from './TestComponent2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataArr: ['1','2','3','4','5','6','7','8','9']
    }
  },
  components:{test,test2},
  methods:{
    incrementTotal(){
      console.info('父组件被调用啦');
    },
    clickref(){
      var child = this.$refs.child; //获取子组件实例,由test2的ref属性定位找到组件
      child.tanData = '12345';           //改变子组件数据 
      child.add();                //调用子组件方法 add
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
