<template>
  <div class="forecast">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div>
        <ForecastCard></ForecastCard>
        <RecommendForm></RecommendForm>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ForecastCard from '@/components/ForecastCard.vue';
import RecommendForm from '@/components/RecommendForm.vue';

export default {
  name: 'Forecast',
  components: {
    Navbar,
    ForecastCard,
    RecommendForm,
  },
};
</script>
