import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const confing = {
  apikey: 'AIzaSyDpSOfP0h0SjHQMF6sn50J2dxUcAxWuqEA ',
  projectId: 'test-20430',
  authDomain: 'test-20430.firebaseapp.com',
  databaseURL: 'https://test-20430.firebaseio.com',
  strongeBuket: 'test-20430.appspot.com',
}

firebase.initializeApp(confing);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
