<template>
  <div>
    <div>{{formatedDate}}</div>
    <button @click="dec">-</button>
    <button @click="inc">+</button>
  </div>
</template>
<script>
export default {
  name: 'CurrentMonth',
  methods: {
    dec() {
      if (this.month === 1) {
        this.$store.dispatch('setCurrentMonth', 12);
        this.$store.dispatch('setCurrentYear', this.year - 1);
      } else this.$store.dispatch('setCurrentMonth', this.month - 1);
      this.$store.dispatch('eventFormToggle');
    },
    inc() {
      if (this.month === 12) {
        this.$store.dispatch('setCurrentMonth', 1);
        this.$store.dispatch('setCurrentYear', this.year + 1);
      } else this.$store.dispatch('setCurrentMonth', this.month + 1);
      this.$store.dispatch('eventFormToggle');
    },
  },
  computed: {
    formatedDate() {
      return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format(
        'MMMM YYYY',
      );
    },
    month() {
      return this.$store.state.currentMonth;
    },
    year() {
      return this.$store.state.currentYear;
    },
  },
};
</script>
