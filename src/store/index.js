import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  currentYear: 2019,
  currentMonth: 5,
  eventFormPosX: 0,
  eventFormPosY: 0,
  eventFormActive: false,
  eventFormDate: moment(),
  events: [
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
  ],
};

const mutations = {
  SET_CURRENT_MONTH(state, payload) {
    state.currentMonth = payload;
  },
  SET_CURRENT_YEAR(state, payload) {
    state.currentYear = payload;
  },
  EVENT_FORM_POS(state, payload) {
    state.eventFormPosX = payload.x;
    state.eventFormPosY = payload.y;
  },
  EVENT_FORM_TOGGLE(state) {
    state.eventFormActive = !state.eventFormActive;
  },
  EVENT_FORM_DATE(state, payload) {
    state.eventFormDate = payload;
  },
  ADD_EVENT(state, payload) {
    state.events.push(payload);
  },
};

const actions = {
  setCurrentMonth({ commit }, payload) {
    commit('SET_CURRENT_MONTH', payload);
  },
  setCurrentYear({ commit }, payload) {
    commit('SET_CURRENT_YEAR', payload);
  },
  eventFormPos({ commit, state }, payload) {
    if (!state.eventFormActive) {
      commit('EVENT_FORM_TOGGLE');
      commit('EVENT_FORM_POS', payload);
    } else {
      commit('EVENT_FORM_POS', payload);
    }
  },
  eventFormToggle({ commit }) {
    commit('EVENT_FORM_TOGGLE');
  },
  addEvent({ commit, state }, payload) {
    let obj = { description: payload, date: state.eventFormDate };
    axios
      .post('/add_event', obj)
      .then(response => {
        console.log(response);
        commit('ADD_EVENT', obj);
      })
      .catch(error => console.log(error));

    commit('EVENT_FORM_TOGGLE');
  },
  eventFormDate({ commit }, payload) {
    commit('EVENT_FORM_DATE', payload);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
