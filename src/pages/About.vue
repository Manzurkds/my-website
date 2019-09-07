<template>
  <Layout>
    <h1 class="text-secondary">A little about me</h1>
    <div class="flex items-center justify-between flex-wrap sm:flex-no-wrap mb-5">
      <div class="text-xl mr-8 mt-5 w-full sm:w-auto">
        <p>I'm Manzur Khan Sarguru, a twentyish year old Frontend Developer. I hail from Mumbai. I'm a Mechanical Engineer by profession but please don't ask me to fix your car or your refrigerator. I neither do it nor I know how to do it😛</p>
        <p>I started my Web Development career just after I graduated. Having spent four years in Mechanical Engineering, I finally realised it's not something what I wanted to do. Also I had craze for tech since childhood and stumbled upon web development, learned it, practiced its, made apps with my learning, got a job and here I am, a Web Developer.</p>
      </div>
      <g-image class="w-full mt-8 sm:w-64" alt="Manzur Khan" src="~/assets/images/manzur-imagica.jpg" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me'
  }
}
</script>
