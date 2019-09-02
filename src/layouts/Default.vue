<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="fade-color">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link fade-color" to="/portfolio">Portfolio</g-link>
        <g-link class="nav__link fade-color" to="/about">About</g-link>
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

  --background-color: #f4f6f9;
  --color: #2D2D2D;
  --fade-color: #a2a8b1;
  --accent-color: #B22222;
  

  background-color: var(--background-color);
  color: var(--color);
}

a {
  text-decoration: none;
}

.accent-color {
  color: var(--accent-color);
}

.fade-color {
  color: var(--fade-color);
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
