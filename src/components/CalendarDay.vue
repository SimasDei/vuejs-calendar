<template>
  <div :class="classObject" @click="captureClick">
    {{day.format('D')}}
    <ul class="event-list">
      <li v-for="(event, index) in events" :key="index">{{event.description}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CalendarDay',
  props: ['day'],
  computed: {
    classObject() {
      let today = this.day.isSame(this.$moment(), 'day');
      let eventFormDate = this.$store.state.eventFormDate;
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
        active: eventFormDate.isSame(this.day, 'day') && !today,
      };
    },
    events() {
      return this.$store.state.events.filter(event =>
        event.date.isSame(this.day, 'day'),
      );
    },
  },
  methods: {
    captureClick(event) {
      this.$store.dispatch('eventFormPos', {
        x: event.clientX,
        y: event.clientY,
      });
      this.$store.dispatch('eventFormDate', this.day);
    },
  },
};
</script>
