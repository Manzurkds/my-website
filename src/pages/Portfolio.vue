<template>
  <Layout>
  
    <div>
      <h1 class="text-secondary">Collaboration with 
        <a class="font-bold" href="https://www.commutatus.com" target="_blank" rel="noopener">
        Commutatus
        </a>
      </h1>
      <div class="flex flex-wrap justify-between project-container mt-20">
        <a class="w-full mt-8 sm:w-5/12 cursor-pointer project-card"
        href="https://www.aiesec.org" target="_blank">
          <figure class="relative project-card__figure">
            <g-image alt="AIESEC Logo" class="project-card__image" src="~/assets/images/aiesec.jpg" />
            <div class="project-card__overlay">
              AIESEC is the world's largest youth-run organization. This is their youth facing portal, where students apply for opportunities.
            </div>
          </figure>
          <p class="text-secondary">Web App</p>
            <p>AIESEC - Youth Opportunity Portal</p>
        </a>
        <a class="w-full mt-8 sm:w-5/12 cursor-pointer project-card"
        href="https://partners.aiesec.org" target="_blank">
          <figure class="relative project-card__figure">
            <g-image alt="AIESEC Logo" class="project-card__image" src="~/assets/images/aiesec.jpg" />
            <div class="project-card__overlay">
              AIESEC is the world's largest youth-run organization. This is their partner facing portal, where companies or organizations post opportunities for candidates.
            </div>
          </figure>
          <p class="text-secondary">Web App</p>
            <p>AIESEC - Parter Opportunity Portal</p>
        </a>
        <a class="w-full mt-8 sm:w-5/12 cursor-pointer project-card"
        href="https://institutions.educatly.com" target="_blank">
          <figure class="relative project-card__figure">
            <g-image alt="Educatly Logo" class="project-card__image" src="~/assets/icons/ed-wordmark.svg" />
            <div class="project-card__overlay text-sm" :style="{top: 0}">
              Educatly is an app that gives student the platform to search, explore and apply to universities, 
              and a platform where Institutions can manage their programs, enrollments and search for the suitable candidates.
              In a nutshell, it's a linked for students and universities.
            </div>
          </figure>
          <p class="text-secondary">Web App</p>
            <p>Educatly - Institutions Platform</p>
        </a>
        <a class="w-full mt-8 sm:w-5/12 cursor-pointer project-card"
        href="https://circularapparel.co" target="_blank">
          <figure class="relative project-card__figure">
            <g-image alt="CAIF Logo" class="project-card__image" :style="{width: '200px', height: '100px'}"
            src="~/assets/icons/caif-logo.svg" />
            <div class="project-card__overlay">
              A co-creation & collaboration platform to develop a circular economy in the clothing & textile industry.
            </div>
          </figure>
          <p class="text-secondary">Web App</p>
            <p>CAIF - Circular Apparel Innovation Factory</p>
        </a>
        <a class="w-full mt-8 sm:w-5/12 cursor-pointer project-card"
        href="https://staging.ragya.com" target="_blank">
          <figure class="relative project-card__figure">
            <g-image alt="CAIF Logo" class="project-card__image" :style="{height: '100px'}"
            src="~/assets/icons/ragya-logo.png" />
            <div class="project-card__overlay">
              Music from maestros of Indian classical music, played based on time of the day, all day.
            </div>
          </figure>
          <p class="text-secondary">Web App</p>
            <p>Ragya - Web platform</p>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>

<style scope lang="scss">
.home-links a {
  margin-right: 1rem;
}

.project-card {
  &:nth-child(even) {
    padding-top: 30px;
  }
  &:nth-child(odd) {
    margin-top: -30px;
  }

  &__figure {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: theme('colors.gray.200');
    &:hover {
      .project-card__image {
        opacity: 0.3;
        filter: grayscale(100%);
      }
      .project-card__overlay {
        opacity: 1;
      }
    }
  }

  &__image {
    height: 150px;
    transition: .5s ease;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    top: 20%;
    text-align: center;
    opacity: 0;
    transition: .5s ease;
  }
}
</style>
