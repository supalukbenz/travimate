<template>
  <div>
    <div class="d-flex">
      <div class="d-flex justify-content-between w-100">
        <div v-for="(date, index) in daysInterval" :key="index">
          <a class="tag-date" @click="dateSelection(index)">
            <div
              class="day-info font-weight-bold pb-1"
              :class="
                index === firstIndex || (index <= lastIndex && index >= firstIndex)
                  ? 'text-blue'
                  : 'text-gray'
              "
            >
              {{ date.month }}, {{ date.year }}
            </div>
            <div
              class="rounded-circle circle d-flex justify-content-center align-items-center"
              :class="
                index === firstIndex || (index <= lastIndex) & (index >= firstIndex)
                  ? 'bg-blue'
                  : 'bg-gray'
              "
            >
              <div>
                <div class="short-date">{{ date.weekDay }}</div>
                <div class="day">{{ date.day }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('updateDaysInterval', this.setDaysInterval());
  },
  data() {
    return {
      firstIndex: -1,
      lastIndex: -1,
      active: false,
    };
  },
  computed: {
    ...mapState({
      daysInterval: state => state.daysInterval,
    }),
  },
  methods: {
    getDaysInMonth(currentDate) {
      return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    },
    setDaysInterval() {
      const currentDate = new Date();
      const setDaysInterval = [];
      const maxDate = currentDate.getDate() + 7;
      var count = 0;
      for (var day = currentDate.getDate(); day <= maxDate; day++) {
        const tomorrow = new Date();
        const newDay = new Date(tomorrow.setDate(tomorrow.getDate() + count));
        const dateInfo = {
          day: newDay.getDate(),
          weekDay: newDay.toLocaleString('th-TH', { weekday: 'short' }),
          month: newDay.toLocaleString('th-TH', { month: 'short' }),
          year: newDay.toLocaleString('default', { year: '2-digit' }),
        };
        setDaysInterval.push(dateInfo);
        count++;
      }
      return setDaysInterval;
    },
    dateSelection(index) {
      if (this.firstIndex === -1) {
        this.firstIndex = index;
      }

      if (this.firstIndex !== -1 && index < this.firstIndex) {
        this.firstIndex = index;
        this.lastIndex = -1;
      }

      if (this.firstIndex !== -1 && index > this.firstIndex) {
        this.lastIndex = index;
      }

      if (this.firstIndex !== -1 && this.lastIndex !== -1 && index === this.firstIndex) {
        this.firstIndex = -1;
        this.lastIndex = -1;
      }

      if (this.firstIndex !== -1 && this.lastIndex !== -1) {
        const dayFormat = [];
        this.daysInterval.map((d, index) => {
          if (index >= this.firstIndex && index <= this.lastIndex) {
            dayFormat.push(d);
          }
        });
        this.$store.dispatch('updateSelectedDate', dayFormat);
      }
    },
  },
};
</script>

<style scoped>
.circle {
  color: #ffffff;
  width: 4rem;
  height: 4rem;
  font-weight: 900;
}

.bg-gray {
  background: #636363;
}

.bg-blue {
  background: #277da1;
}

.day-info {
  font-size: 0.8rem;
}

.text-gray {
  color: #636363;
}

.text-blue {
  color: #277da1;
}

.short-date {
  font-size: 0.7rem;
}

.day {
  font-size: 1.4rem;
}

.tag-date {
  cursor: pointer;
}

.tag-date:hover {
  text-decoration: none;
}

.tag-date:hover .circle {
  background: #277da1;
}

.tag-date:hover .day-info {
  color: #277da1;
}
</style>
