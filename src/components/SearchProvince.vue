<template>
  <div class="input-container">
    <div class="shadow pt-5 px-5 bg-white rounded input-body">
      <div class="pb-4 d-flex flex-column">
        <div class="d-flex">
          <div class="dropdown">
            <button class="dropdown-search h-100" @click="handleDropdown" ref="dropdownMenu">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-search dropdown-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="จังหวัดจุดหมายปลายทาง"
            v-model="selectedProvince"
            class="w-100 p-1 py-2 pl-2 input-province"
          />
        </div>
        <div v-show="toggleDropdown" class="position-absolute toggle">
          <div v-for="(province, index) in availableProvince" :key="index">
            <button class="province-item pt-1" @click="provinceSelection(province)">
              {{ province }}
            </button>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div class="mb-2 font-weight-bold">วันที่</div>
        <DatePicker></DatePicker>
      </div>
    </div>
    <button class="btn-submit-province py-2" @click="searchSubmit">เช็คสภาพอากาศ</button>
  </div>
</template>

<script>
import DatePicker from './DatePicker';
import $ from 'jquery';
import { mapGetters, mapState } from 'vuex';
import { getWeatherForecast } from '@/api/forecast.js';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      toggleDropdown: false,
      selectedProvince: '',
      availableProvince: [],
    };
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
  created() {
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  computed: {
    ...mapState({
      selectedDate: state => state.selectedDate,
    }),
    ...mapGetters({
      provinceName: 'getProviceName',
      provinceInfo: 'getProvinceInfoByName',
      weatherInfoBySelectedDay: 'getWeatherInfoBySelectedDay',
    }),
  },
  methods: {
    close(e) {
      if (this.toggleDropdown) {
        const el = this.$refs.dropdownMenu;
        const target = e.target;
        if (el !== target && !el.contains(target)) {
          this.toggleDropdown = false;
        }
      }
    },
    handleDropdown() {
      this.toggleDropdown = !this.toggleDropdown;
      this.availableProvince = this.provinceName;
    },
    provinceSelection(province) {
      this.selectedProvince = province;
    },
    async getWeatherInfo(lat, lng) {
      const forecastRes = await getWeatherForecast(lat, lng);
      console.log('res', forecastRes);
      return forecastRes;
    },
    async searchSubmit() {
      if (this.selectedProvince && this.selectedDate.length !== 0) {
        console.log(this.selectedDate);
        const province = await this.provinceInfo(this.selectedProvince);
        this.$store.dispatch('updateSelectedProvince', province);
        const info = await this.getWeatherInfo(province.lat, province.lng);
        this.$store.dispatch('updateWeatherAllInfo', info);
        const weather = await this.weatherInfoBySelectedDay(this.selectedDate);
        await this.$store.dispatch('updateWeatherInfoByDate', weather);
        this.$router.push('/forecast');
      }
    },
  },
  watch: {
    selectedProvince(val) {
      if (val) {
        const filterProvince = this.provinceName.filter(p => p.includes(val));
        this.availableProvince = filterProvince;
        this.toggleDropdown = true;
      } else {
        this.toggleDropdown = false;
      }
    },
  },
};
</script>

<style>
.input-province {
  border: 1px solid #ced4da;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  outline: 0;
}

.input-body {
  margin-bottom: -1rem;
}

.dropdown-search {
  border: 1px solid #ced4da;
  border-right: none;
  background: #ffffff;
  width: 2rem;
  border-radius: 10px 0px 0px 10px;
}

.dropdown-search:focus {
  outline: 0;
}

.dropdown-icon {
  color: #ced4da;
}

.btn-submit-province {
  border: none;
  background: #25ced1;
  color: #ffffff;
  width: 50%;
  border-radius: 20px;
  font-weight: 900;
  font-size: 1.1rem;
}

.btn-submit-province:hover {
  background: #21b2b5;
}

.btn-submit-province:focus {
  outline: none;
}

.toggle {
  width: 12rem;
  max-height: 15rem;
  overflow-y: scroll;
  margin-top: 2.6rem;
  margin-left: 0.4rem;
  background: #ffffff;
}

.province-item {
  background: #ffffff;
  border: 1px solid #ced4da;
  border-top: none;
  /* border-right: none; */
  width: 100%;
  text-align: left;
  padding-left: 2rem;
}

.province-item:hover {
  background: #277da1;
  color: #ffffff;
}

/* ::-webkit-scrollbar {
  -webkit-appearance: none;
  margin-left: -2rem;
  width: 7px;
  border: 1px solid #ced4da;
  border-left: none;
  border-top: none;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
} */
</style>
