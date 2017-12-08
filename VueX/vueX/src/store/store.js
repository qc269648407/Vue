import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count:1
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count-=1;
    }
}

//通过getters调用数据时，每次都会进行一次数据变化
const getters = {
    count:function(state){
        return state.count +=100;
    }
}


//mutations同步函数
//actions异步函数
const actions ={
    addAction(context,n){
        
        context.commit('add',n);
    },
    reduceAction({commit}){
        setTimeout(function (){
            commit('reduce');
            console.log('执行了');
        }, 3000);
        console.log('reduce延迟3s执行');
        //测试异步
        // commit('reduce');
    }
}

export default new Vuex.Store({
    state,mutations,getters,actions
});