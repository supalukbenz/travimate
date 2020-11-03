<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div>
        <ForecastCard></ForecastCard>
        <ForecastCard></ForecastCard>
        <ForecastCard></ForecastCard>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ForecastCard from '@/components/ForecastCard.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    ForecastCard,
  },
};
</script>
