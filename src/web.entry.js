import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';

import './style.scss';

import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.moment;
  },
});

Vue.use(Vuex);

new Vue({
  el: '#app',
  data: {
    moment,
  },
  components: {
    App,
  },
  store: {
    state: {
      currentYear: 2019,
      currentMonth: 5,
    },
  },
});
