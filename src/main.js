import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AppNavigation from './components/Navigation.vue';
import AppBar from './components/AppBar.vue';
import AppContent from './components/Content.vue';
import AppFooter from './components/Footer.vue';

Vue.config.productionTip = false
Vue.component('app-navigation', AppNavigation)
Vue.component('app-custom-bar', AppBar)
Vue.component('app-custom-content', AppContent)
Vue.component('app-custom-footer', AppFooter)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
