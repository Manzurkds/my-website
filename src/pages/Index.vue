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
        <g-image class="w-80 mt-8 sm:w-64" alt="Manzur Khan" src="~/assets/images/manzur.webp" />
      </aside>
    </section>
    <section class="mt-20">
      <h1 class="text-secondary">Find me on:</h1>
      <div class="sm:flex mt-5">
        <a class="flex mr-4 mb-4" :class="socialPlatform.name" v-for="socialPlatform in socialPlatforms"
          :href="socialPlatform.url" target="_blank">
          <i class="im mr-1 text-accent" :class="socialPlatform.icon"></i>
          <span>{{ socialPlatform.name }}</span>
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
  data: () => ({
    socialPlatforms: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/manzurkds',
        icon: 'im-linkedin',
        brandColor: '#0077b5'
      },
      {
        name: 'Github',
        url: 'https://github.com/manzurkds',
        icon: 'im-github',
        brandColor: '#333'
      },
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/6883002/manzur-khan',
        icon: 'im-stackoverflow',
        brandColor: '#f48024'
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/manzurkds',
        icon: 'im-facebook',
        brandColor: '#3b5998'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/manzurkds',
        icon: 'im-twitter',
        brandColor: '#1da1f2'
      },
    ]
  }),
  metaInfo: {
    title: 'Home'
  },
  methods: {
    test: function(socialPlatform) {
      socialPlatform.hovered = true;
      console.log('hovered is: ', this.socialPlatforms);
    }
  },
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.LinkedIn {
  &:hover {
    .im {
      color: #0077b5;
      transition: 0.2s ease-in;
    }
  }
}
.Github {
  &:hover {
    .im {
      color: #333;
      transition: 0.2s ease-in;
    }
  }
}
.Stackoverflow {
  &:hover {
    .im {
      color: #f48024;
      transition: 0.2s ease-in;
    }
  }
}
.Facebook {
  &:hover {
    .im {
      color: #3b5998;
      transition: 0.2s ease-in;
    }
  }
}
.Twitter {
  &:hover {
    .im {
      color: #1da1f2;
      transition: 0.2s ease-in;
    }
  }
}
</style>
