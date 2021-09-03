<template>
  <div>
    <h1>Nuxtjs Free Will</h1>
    <NuxtLink to="/1">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$store.state.siteName,
      link: [{ rel: 'canonical', href: `${this.$store.state.baseUrl}` }],
      meta: [
        { name: 'author', content: this.$store.state.siteName },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxtjs Free Will'
        },
        { name: 'keywords', content: 'Nuxtjs Free Will' },
        { name: 'twitter:card', content: 'website' },
        { name: 'twitter:creator', content: 'Nuxtjs Free Will' },
        { name: 'twitter:site', content: 'Nuxtjs Free Will' },
        { name: 'twitter:title', content: 'Nuxtjs Free Will' },
        { name: 'twitter:description', content: 'Nuxtjs Free Will' },
        { name: 'twitter:image', content: 'Nuxtjs Free Will' },
        { name: 'twitter:image:alt', content: 'Nuxtjs Free Will' },
        { property: 'og:title', content: 'Nuxtjs Free Will' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'Nuxtjs Free Will' },
        { property: 'og:url', content: 'Nuxtjs Free Will' },
        { property: 'og:description', content: 'Nuxtjs Free Will' },
        { property: 'og:site_name', content: 'Nuxtjs Free Will' },
        { property: 'website:tag', content: 'Nuxtjs Free Will' }
      ]
    };
  }
  // asyncData({ $axios, error }) {
  //   return $axios
  //     .$get(`/`)
  //     .then((res) => {
  //       return { config: res.config };
  //     })
  //     .catch((e) => {
  //       error({ statusCode: 404, message: "Config not found" });
  //     });
  // },
};
</script>
<style lang="scss"></style>
