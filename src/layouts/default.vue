<template>
  <div class="container-fruid wrapper-page">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from './../components/organisms/navbar';
import Footer from './../components/organisms/footer';
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss"></style>
