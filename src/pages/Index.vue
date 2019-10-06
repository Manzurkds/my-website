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
    <section class="mt-20">
      <h1 class="text-secondary">Find me on:</h1>
      <div class="flex mt-5">
        <a class="flex items-center mr-4"
          href="https://linkedin.com/in/manzurkds" target="_blank">
          <g-image class="w-8 mr-1" alt="LinkedIn logo" src="~/assets/icons/linkedin.png" />
          LinkedIn
        </a>
        <a class="flex items-center mr-4"
          href="https://github.com/manzurkds" target="_blank">
          <g-image class="w-8 mr-1" alt="Github logo" src="~/assets/icons/github.png" />
          GitHub
        </a>
        <a class="flex items-center mr-4"
          href="https://stackoverflow.com/users/6883002/manzur-khan" target="_blank">
          <g-image class="w-8 mr-1" alt="Stackoverflow logo" src="~/assets/icons/stackoverflow.png" />
          Stackoverflow
        </a>
        <a class="flex items-center mr-4"
          href="https://facebook.com/manzurkds" target="_blank">
          <g-image class="w-8 mr-1" alt="Facebook logo" src="~/assets/icons/facebook.png" />
          Facebook
        </a>
        <a class="flex items-center mr-4"
          href="https://twitter.com/manzurkds" target="_blank">
          <g-image class="w-8 mr-1" alt="Twitter logo" src="~/assets/icons/twitter.png" />
          Twitter
        </a>
      </div>
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
