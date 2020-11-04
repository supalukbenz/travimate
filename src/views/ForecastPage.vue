<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div>
        <ForecastCard day="Monday" date="Nov 3, 2020" dayTemp="25" nightTemp="20"></ForecastCard>
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
