import Vue from 'vue/dist/vue.js'
import Router from 'vue-router';

import {detail} from '../src/views/detail'
Vue.use(Router)
const Foo = { template: '<div>foo</div>' }

export default new Router({
  routes: [
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    }
  ]
})
