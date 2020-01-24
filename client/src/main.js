import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Foobar from './components/Foobar.vue'
import Show from './components/Show.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/', component: Foobar },
  { path: '/show', name: 'show', component: Show }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: "#app",
	router,
	data: {
    sessions: "sess"
  },
  created () {
    fetch('http://localhost:3000/sessions')
      .then(response => response.json())
      .then(json => {
      
        this.sessions = json
      })
  },
  render: h => h(App),
}).$mount('#app')
