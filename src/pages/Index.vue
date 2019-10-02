<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <section class="mt-8 flex justify-between items-center flex-wrap content-center">
      <section class="w-full sm:w-1/2">
        <h1 class="text-3xl">Hi! I'm <span class="m-1 text-accent">Manzur</span> Khan</h1>
    
        <p class="mt-2 text-secondary">
          I like to chill, surf the internet, answer on stackoverflow and sometimes build web apps😜
        </p>
      </section>

      <aside>
        <g-image class="w-80 mt-8 sm:w-64" alt="Manzur Khan" src="~/assets/images/manzur.jpg" />
      </aside>
    </section>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
