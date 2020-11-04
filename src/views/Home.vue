<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="home-content-container py-5 d-flex justify-content-center">
      <div class="search-container">
        <SearchProvince></SearchProvince>
      </div>
    </div>
    <div class="footer"><Footer></Footer></div>
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

<style>
.home {
  background-image: url(../assets/bg_home.png);
  background-size: cover;
  height: 100%;
}

.search-container {
  width: 50%;
}

.footer {
  position: sticky;
  bottom: 0;
}

.home-content-container {
  min-height: calc(100vh - 17rem);
}

@media screen and (max-width: 1162px) {
  .search-container {
    width: 60%;
  }
}

@media screen and (max-width: 1146px) {
  .search-container {
    width: 75%;
  }
}

@media screen and (max-width: 755px) {
  .search-container {
    width: 100%;
  }
}
</style>
