<template>
  <div class="hello">
    <button v-on:click="show = !show">
                    Toggle
                  </button>
    <!-- <transition name="fade">
              <p v-if="show">hello</p>
            </transition> -->
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 在进入/离开的过渡中，会有 6 个 class 切换。
          v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
          v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
          v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
          v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
          v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
          v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。 */
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in below version 2.1.8 */
  
  {
    opacity: 0
  }
  
  
  /* 第二个 */
  
  
  /* 消失到显示过程开始的样式 */
  
  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
    font-size: 100px;
  }
  
  
  /* 从消失到显示的过程样式 */
  
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  
  
  /* 消失到显示过程的最后一帧 */
  
  .slide-fade-enter-to {
    font-size: 30px;
  }
  
  
  /* 显示到消失的第一帧，感觉有点显示问题 */
  
  .slide-fade-leave {
    font-size: 1000px;
  }
  
  
  /* 显示到消失的过程 */
  
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  
  /* 显示到消失过程的前一帧 */
  
  .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
