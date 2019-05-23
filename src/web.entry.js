import Vue from 'vue';
import moment from 'moment-timezone';

import store from './store';
import './style.scss';

import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    return this.$root.moment;
  },
});

const events = [
  {
    description: 'Eventerino',
    date: moment('2019-03-06', 'YYYY-MM-DD'),
  },
  {
    description: 'Tododerino',
    date: moment('2019-05-22', 'YYYY-MM-DD'),
  },
  {
    description: 'Activitisky',
    date: moment('2019-05-30', 'YYYY-MM-DD'),
  },
];

const initialState = Object.assign({}, store.state, { events: events });

store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment,
  },
  components: {
    App,
  },
  store,
});
