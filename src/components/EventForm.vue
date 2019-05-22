<template>
  <div
    :class="{active: true}"
    id="event-form"
    v-show="eventFormActive"
    :style="{top: top, left: left}"
  >
    <h4>Add an event</h4>
    <p v-if="date">{{date.format('dddd, MMM Do')}}</p>
    <div class="text">
      <input
        v-focus
        type="text"
        placeholder="e.g. Lightsaber Duel with Kevin"
        v-model="description"
        @keyup.enter="create"
      >
    </div>
    <div class="buttons">
      <button @click="create">Create</button>
    </div>
    <button id="close-button" @click="close">&#10005;</button>
  </div>
</template>
<script>
export default {
  name: 'EventForm',
  data() {
    return {
      description: '',
    };
  },
  computed: {
    top() {
      return `${this.$store.state.eventFormPosY}px`;
    },
    left() {
      return `${this.$store.state.eventFormPosX}px`;
    },
    eventFormActive() {
      return this.$store.state.eventFormActive;
    },
    date() {
      return this.$store.state.eventFormDate;
    },
  },
  methods: {
    close() {
      this.$store.dispatch('eventFormToggle');
    },
    create() {
      if (this.description.length) {
        this.$store.dispatch('addEvent', this.description);
        this.description = '';
      } else console.error('Type something, will ya?');
    },
  },
  directives: {
    focus: {
      update(el) {
        el.focus();
      },
    },
  },
};
</script>
