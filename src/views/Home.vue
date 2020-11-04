<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div class="w-50">
        <SearchProvince></SearchProvince>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SearchProvince from '@/components/SearchProvince.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    SearchProvince,
    Footer,
  },
};
</script>

<style scoped>
.content-container {
  margin-bottom: 24vh;
}
</style>
