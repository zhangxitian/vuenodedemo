import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld2 from '../components/HelloWorld2'
import HelloWorld3 from '../components/HelloWorld3'
import VideoList from '../page/videolist'
import Images from '../page/images'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/videolist'
    },
    {
      path: '/videolist',
      name: 'videolist',
      component: VideoList
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/helloworld2',
      name: 'helloworld2',
      component: HelloWorld2
    },
    {
      path: '/helloworld3',
      name: 'HelloWorld3',
      component: HelloWorld3
    }
  ]
})
