<template>
  <div class="layout mb-20">
    <header class="header">
      <strong>
        <g-link to="/" class="text-fade">
          <img v-if="$route.path === '/'" class="w-8" src="~/../assets/icons/manzur-smiling.webp" alt="Manzur Khan">
          <img v-if="$route.path === '/portfolio'" class="w-8" src="~/../assets/icons/manzur-smart.webp" alt="Manzur Khan">
          <img v-if="$route.path === '/about'" class="w-8" src="~/../assets/icons/manzur-sceptical.webp" alt="Manzur Khan">
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link text-fade" to="/portfolio">Portfolio</g-link>
        <g-link class="nav__link text-fade" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  

  background-color: theme('colors.background');
  color: theme('colors.primary');
}

a {
  text-decoration: none;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
