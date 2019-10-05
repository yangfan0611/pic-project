import Vue from  'vue';
import All from './all'
import underscore from 'underscore';
Vue.use({
  install(Vue,options){
    underscore.each(All,(item,key)=>{
      Vue.prototype[key] = item
    })
  }
})


