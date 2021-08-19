<template>
  <SearchBar />
  <Carousel />
  <Business />
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Carousel from "../components/Carousel.vue";
import Business from "../components/Business.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    Carousel,
    Business,
  },
};
</script>
