<template>
  <div class="forecast">
    <Navbar></Navbar>
    <div class="font-weight-bold mt-4 d-flex title-forecast-page">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-geo-alt-fill mr-2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        />
      </svg>
      {{ selectedProvince.province }}
    </div>
    <div class="font-weight-bold mb-3 d-flex legion-forecast-page">
      ภาค{{ selectedProvince.legion }}
    </div>
    <div class="content-container h-100 d-flex justify-content-center">
      <div class="main-content w-100">
        <div v-for="(weather, index) in weatherInfoByDate" :key="index">
          <ForecastCard :weatherInfo="weather"></ForecastCard>
        </div>
      </div>
    </div>
    <div class="px-5 mt-5"><hr /></div>
    <RecommendForm></RecommendForm>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ForecastCard from '@/components/ForecastCard.vue';
import RecommendForm from '@/components/RecommendForm.vue';
import { mapState } from 'vuex';

export default {
  name: 'Forecast',
  components: {
    Navbar,
    ForecastCard,
    RecommendForm,
  },
  computed: {
    ...mapState({
      weatherInfoByDate: state => state.weatherInfoByDate,
      selectedProvince: state => state.selectedProvince,
    }),
  },
};
</script>

<style scoped>
.main-content {
  width: 50vw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.title-forecast-page {
  margin-left: 13rem;
  font-size: 2rem;
}

.legion-forecast-page {
  margin-left: 15rem;
  font-size: 1.2rem;
}
</style>
