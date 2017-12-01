<template>
  <div class="hello">
  <div v-for="showData in showDataArr">
    <div class="tapDiv" v-touch='showData'>长按我</div>
    <div class="showDiv" v-if="showData.show == 1">俺出现了</div>
  </div>
  </div>
</template>

<script>
  export default {
    directives: {
      //指令主体
      touch: {
        inserted: function(el, value) {
          let _t = this;
          console.info(value);
          //添加按下事件
          el.addEventListener("touchstart", touchstart);
          //添加抬起事件
          el.addEventListener("touchend", touchend);
  
          function touchstart() {
            value.value.show = 1;
          }
  
          function touchend() {
            value.value.show = 0;
          }
        }
      }
    },
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        showDataArr: [{
          num: 1,
          show: 0
        }, {
          num: 2,
          show: 0
        }, {
          num: 3,
          show: 0
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tapDiv {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: gray;
    color: white;
  }
  
  .showDiv {
    color: black;
    font-size: 20px;
    background: yellow;
  }
</style>
