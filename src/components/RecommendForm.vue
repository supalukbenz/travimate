<template>
  <div>
    <div class="title-recommend w-auto">วันที่อากาศแจ่มใส {{ selectedProvince }}</div>
    <div class="title-date-recommend">
      ระหว่างวันที่ {{ daysInterval[0].day }}, {{ daysInterval[0].month }} -
      {{ daysInterval[daysInterval.length - 1].day }},
      {{ daysInterval[daysInterval.length - 1].month }}
    </div>
    <div class="w-full d-flex ml-4 mt-2">
      <div class="icon">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-sun sun-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
          <path
            fill-rule="evenodd"
            d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
          />
        </svg>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-cloud-fill cloud-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
          />
        </svg>
      </div>
      <div class="date-recommend d-flex">
        <div v-for="(recommend, index) in recommendClound" :key="index" class="ml-4">
          <div class="day-info font-weight-bold pb-1">
            {{ recommend.day.toLocaleString('th-TH', { month: 'short' }) }},
            {{ recommend.day.toLocaleString('default', { year: '2-digit' }) }}
          </div>
          <div
            class="rounded-circle bg-blue circle d-flex justify-content-center align-items-center"
          >
            <div>
              <div class="short-date">
                {{ recommend.day.toLocaleString('th-TH', { weekday: 'short' }) }}
              </div>
              <div class="day">{{ recommend.day.getDate() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getWeatherForecast } from '@/api/forecast.js';
// import { mapState } from 'vuex'

export default {
  // computed: {
  //   ...mapState({
  //     selectedDate: state => state.selectedDate,
  //     selectedProvince: state => state.selectedProvince,
  //   })
  // },
  computed: {
    ...mapGetters({
      provinceInfo: 'getProvinceInfoByName',
    }),
  },
  async mounted() {
    const forecastRes = await getWeatherForecast(13.8658492, 100.4941285);
    const forecast = [];
    forecastRes.daily.map(f => {
      const formatInfo = {
        id: f.weather[0].id,
        day: new Date(f.dt * 1000),
        description: f.weather[0].description,
        icon: f.weather[0].icon,
        main: f.weather[0].main,
      };
      forecast.push(formatInfo);
    });
    this.recommendClound = this.findRecommendWeather(forecast);
    console.log(this.recommendClound);
  },
  methods: {
    findRecommendWeather(forecast) {
      const recommendClound = forecast.filter(f => {
        if (String(f.id).charAt(0) === '8') {
          return f;
        }
      });
      return recommendClound;
    },
  },
  data() {
    return {
      recommendClound: [],
      recommendDo: [],
      selectedProvince: 'นนทบุรี',
      selectedDate: [
        {
          day: 5,
          month: 'Nov',
          weekDay: 'Thu',
          year: '20',
        },
        {
          day: 6,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
        {
          day: 7,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
      ],
      daysInterval: [
        {
          day: 4,
          month: 'Nov',
          weekDay: 'Thu',
          year: '20',
        },
        {
          day: 5,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
        {
          day: 6,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
        {
          day: 7,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
        {
          day: 8,
          month: 'Nov',
          weekDay: 'Wed',
          year: '20',
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-recommend {
  font-size: 1.5rem;
  font-weight: 900;
}

.title-date-recommend {
  font-weight: 900;
  font-size: 1.2rem;
}

.sun-icon {
  font-size: 9rem;
  color: #f28c38;
  margin-left: 3rem;
}

.cloud-icon {
  font-size: 6rem;
  color: #3c89d0;
  margin-left: -4rem;
  margin-bottom: -3rem;
}

.bg-blue {
  background: #3c89d0;
}

.circle {
  color: #ffffff;
  width: 4rem;
  height: 4rem;
  font-weight: 900;
}

.short-date {
  font-size: 0.7rem;
}

.day {
  font-size: 1.4rem;
}

.day-info {
  font-size: 0.8rem;
}

.date-recommend {
  margin-left: 5rem;
  margin-top: 2rem;
}
</style>
