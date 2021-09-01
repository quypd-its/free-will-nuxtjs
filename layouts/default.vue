<template>
  <div class="container-fruid wrapper-page">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss">
</style>