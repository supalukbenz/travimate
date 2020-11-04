<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div class="main-content">
        <div></div>
        <ForecastCard
          day="วันจันทร์"
          date="3 พย. 2020"
          weather="มีเมฆเล็กน้อย"
          dayTemp="25"
          nightTemp="20"
        ></ForecastCard>
        <ForecastCard
          day="วันอังคาร"
          date="4 พย. 2020"
          weather="ท้องฟ้าโปร่ง"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
        <ForecastCard
          day="วันพุธ"
          date="5 พย. 2020"
          weather="123456789"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
        <ForecastCard
          day="วันพฤหัสบดี"
          date="6 พย. 2020"
          weather="ท้องฟ้าโปร่ง"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
        <ForecastCard
          day="วันศุกร์"
          date="7 พย. 2020"
          weather="ท้องฟ้าโปร่ง"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
        <ForecastCard
          day="วันเสาร์"
          date="8 พย. 2020"
          weather="ท้องฟ้าโปร่ง"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
        <ForecastCard
          day="วันอาทิตย์"
          date="9 พย. 2020"
          weather="ท้องฟ้าโปร่ง"
          dayTemp="28"
          nightTemp="21"
        ></ForecastCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ForecastCard from '@/components/ForecastCard.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    ForecastCard,
    Footer,
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
</style>
