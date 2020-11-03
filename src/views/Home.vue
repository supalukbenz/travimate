<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div class="w-50">
        <SearchProvince></SearchProvince>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SearchProvince from '@/components/SearchProvince.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    SearchProvince,
  },
};
</script>
