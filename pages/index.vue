<script>
import HeroImg from "@/assets/img/home/homepage-about-intro.png";
import blogIcon from "@/assets/img/ma-homepage-form-section-2.svg";
import Parallax from "/components/global/Parallax";
import Modal from "~/components/global/navbar/Modal.vue";
import OrbitIcons from "../components/global/OrbitIcons.vue";
import Observer from "vue-intersection-observer";
export default {
  head() {
    return {
      title: "ModernAmusement => Shady Tawfik",
      meta: [
        {
          name: "og:description",
          property: "og:description",
          content:
            "ModernAmusement Homepage => Shady Tawfik Bielefeld, creative fullstack web developer Code, 7 years of professional work experience, kreativer Fullstack-Webentwickler/Entwickler Code, 7 Jahre Berufserfahrung. Frontend Backend",
        },
        {
          name: "description",
          property: "description",
          content:
            "ModernAmusement Homepage => Shady Tawfik Bielefeld, creative fullstack web developer Code, 7 years of professional work experience, kreativer Fullstack-Webentwickler/Entwickler Code, 7 Jahre Berufserfahrung. Frontend Backend",
        },
      ],
    };
  },
  components: {
    Parallax,
    Modal,
    OrbitIcons,
    Observer,
  },
  data() {
    return {
      visible: false,
      HeroImg,
      blogIcon,
      parallaxItems: [
        {
          layerOne: require("/assets/img/home/layer-1.svg"),
          layerTwo: require("/assets/img/home/layer-2.svg"),
          layerThree: require("/assets/img/home/layer-3.svg"),
          layerFour: require("/assets/img/home/layer-4.svg"),
        },
      ],
    };
  },
  methods: {
    onChange(entry, obv) {
      this.visible = entry.isIntersecting;
    },
  },
};
</script>
<template>
  <main>
    <!-- Homepage Hero -->
    <section class="homepage-1">
      <div class="content-wrapper">
        <!-- Homepage Text -->
        <div class="homepage-content-about text-start">
          <h2 class="text-lg mb-0 hidden sm:block underline mdunderline-offset-1">
            {{ $t("introHomepageSubheadline") }}
          </h2>
          <h1 class="display">
            <span class="hidden sm:block">{{ $t("introHomepage") }}</span>
            <span class="text-primary"> >{{ $t("introHomepageCopy") }}</span>
          </h1>
          <p class="text-sm md:text-base">
            // {{ $t("introHomepageSkillOne") }}
            <br />
            // {{ $t("introHomepageSkillTwo") }}
            <br />
            // {{ $t("introHomepageSkillThree") }}
            <br />
            // {{ $t("introHomepageSkillFour") }}
            <br />
            // {{ $t("introHomepageSkillFive") }}
            <br />
            // {{ $t("introHomepageSkillSix") }}
            <br />
          </p>
          <Modal class="mt-10" />
        </div>
        <!-- Homepage Img -->
        <!-- <img class="mt-8 md:mt-0 w-100" :src="HeroImg" alt="..." /> -->
        <div class="w-full">
          <h1 class="text-xl display mb-0 block sm:hidden">
            {{ $t("introHomepageMobile") }}
          </h1>
          <section class="parallax">
            <Parallax
              v-for="parallax in parallaxItems"
              :key="parallax.color"
              :parallax="parallax"
            />
          </section>
        </div>
      </div>
    </section>
    <section class="intro">
      <div class="content-wrapper">
        <!-- Homepage Text -->
        <div class="homepage-content-about-intro text-start mr-0 md:mr-10">
          <h2 class="text-lg mb-0 block underline underline-offset-1">Capabilities</h2>
          <h1 class="display">
            <span class="text-primary"> >About Me</span>
          </h1>
          <p class="text-lg mb-10">
            7 years of professional work experience I am familiar with working in small
            teams as well as with the challenges of large projects where teams must
            coordinate like the precision of a Swiss watch.
            <br /><br />
            I am currently employed at
            <a href="https://epunks.de/agentur/gangmitglied-shady">epunks</a> and hold the
            position of Head of Frontend and QA Engineer.
          </p>
          <div class="capabilities">
            <ul class="list-disc text-sm md:text-base ml-5 mr-5">
              <li>Development</li>
              <li>Dev Ops</li>
              <li>Web Hosting</li>
              <li>Wordpress</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>MySql</li>
              <li>CSS3/SASS</li>
              <li>HTML5</li>
              <li>VueJS</li>
              <li>NuxtJS</li>
              <li>Laravel</li>
              <li>UI/UX-Design</li>
              <li>Docker</li>
              <li>TYPO-3</li>
            </ul>
            <ul class="list-disc text-sm md:text-base ml-5">
              <li>GIT</li>
              <li>CI/CD</li>
              <li>API´s</li>
              <li>SQL</li>
              <li>Performance Engineer</li>
              <li>Backpack CMS</li>
              <li>Kirby CMS</li>
              <li>Playwright</li>
              <li>Cypress</li>
              <li>SEA/SEO</li>
              <li>Hosting</li>
              <li>Performance Engineer</li>
              <li>Tailwindcss</li>
              <li>Bootstrap</li>
              <li>Microservices</li>
            </ul>
          </div>
          <div class="capabilities">
            <nuxt-link
              to="/about"
              class="dark:text-primary-400 btn font-semibold text-sm mt-10"
            >
              ==> More
            </nuxt-link>
          </div>
        </div>
        <!-- Homepage Img -->
        <div class="about-img-intro">
          <img class="mt-8 md:mt-0 w-100" :src="HeroImg" alt="..." />
        </div>
      </div>
    </section>
    <section class="blog-post-preview mt-8">
      <div class="flex flex-col content-start mr-0 md:mr-10">
        <observer @on-change="onChange">
          <div class="blog-post-preview-1" :class="{ active: visible }">
            <h3 class="text-primary display underline underline-offset-1">
              {{ $t("homepageBlogHeadline") }}
            </h3>
            <p class="text-lg">
              {{ $t("homepageBlogDescriptionShort") }}
            </p>
            <p class="text-xs mb-5">
              {{ $t("homepageBlogDescriptionLong") }}
            </p>
          </div>
          <OrbitIcons />
        </observer>
      </div>
      <posts class="blog-posts" post-type="blog" :amount="5" />
    </section>
  </main>
</template>
<style lang="postcss" scoped>
@keyframes content-1 {
  from {
    transform: translateX(-1000px);
  }

  to {
    transform: translateX(0px);
  }
}

@keyframes content-2 {
  from {
    transform: translateX(1000px);
  }

  to {
    transform: translateX(0px);
  }
}

section {
  margin-bottom: 6rem;
}

.homepage-1 {
  margin-top: 2rem;
  margin-bottom: 6rem;
}

.homepage-content-about {
  width: 100%;
  transform: translateX(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: content-1;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.homepage-content-about-intro,
.about-img-intro {
  width: 50%;
}

.content-start,
.homepage-content-about-intro,
.blog-post-preview {
  width: 100%;
  transform: translateX(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: content-1;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.blog-post-preview-1 {
  opacity: 0;
}

.blog-post-preview-1.active {
  width: 100%;
  transform: translateX(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: content-1;
  animation-iteration-count: 1;
  animation-direction: alternate;
  opacity: 1;
}

.blog-posts,
.about-img-intro {
  width: 100%;
  transform: translateX(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: content-2;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-post-preview {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.capabilities {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

h3.display {
  transform: translateY(-27px);
}

.parallax {
  display: flex;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.hyphens-auto {
  hyphens: auto;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: fit-content;
}

input {
  height: 2.6rem;
}

@media (max-width: 1024px) {
  .parallax {
    padding: 2rem;
  }

  li {
    border-right: none;
  }

  .blog-post-preview {
    flex-direction: column;
  }

  .homepage-content-about-intro,
  .about-img-intro {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .homepage-1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .homepage-content-about {
    order: 1;
  }

  .content-wrapper,
  .content-wrapper-center {
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3rem;
  }

  .parallax {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.8) translate(-22px, 0px);
  }

  h1.display {
    font-size: 2rem;
  }

  h3.display {
    font-size: 2rem;
  }
}
</style>
