<script>
import aboutImgOne from "@/assets/img/about/about-img-1.png";
import aboutImgTwo from "@/assets/img/about/about-img-2.svg";
import aboutImgThree from "@/assets/img/about/about-img-3.png";
import aboutImgNew from "@/assets/img/about/shady.png";
export default {
  head() {
    return {
      title: "About => Shady Tawfik",
      meta: [
        {
          name: "og:title",
          property: "og:title",
          content: "About => Shady Tawfik",
        },
        {
          name: "og:description",
          property: "og:description",
          content: "About Shady Tawfik from Bielefeld Germany, Fullstack Delevoper",
        },
        {
          name: "description",
          property: "description",
          content: "About Shady Tawfik from Bielefeld Germany, Fullstack Delevoper",
        },
      ],
    };
  },
  data() {
    return {
      aboutImgOne,
      aboutImgTwo,
      aboutImgThree,
      aboutImgNew,
    };
  },
};
</script>

<template>
  <main>
    <section>
      <!-- s1 -->
      <div class="content-wrapper">
        <div class="text-start">
          <h2 class="underline underline-offset-1 text-lg">
            Compiling Ideas Into Code is my Motto
          </h2>
          <h1>
            Shady Tawfik is a German
            <span class="text-primary">JavaScript/PHP Developer</span>,
            Quality/Performance Engineer.<br />
            Fluent in PHP and JavaScript.
          </h1>

          <img class="mt-8 md:mt-0 p-5" :src="aboutImgNew" alt="..." />
        </div>
        <div class="text-start">
          <p>
            I am deeply interested in both frontend and backend frameworks. Based in
            Bielefeld, I currently serve as the head of frontend at epunks. As a
            full-stack developer, I believe in pushing boundaries. If I encounter a limit,
            I challenge and cross it without hesitation.
          </p>
          <p>
            My passion lies in web design and development, and I continually seek
            inspiration and new directions. Every day, I strive to enhance my toolset and
            adapt to modern techniques. Networking plays a pivotal role in my profession,
            and I can confidently say that I am wholeheartedly committed to the design and
            development industry. Over the years, I've come to understand that I can
            create wonders from any location. My creativity and kindness inspire many, and
            I take pride in maintaining a positive outlook. I never shy away from any
            project or task, no matter how small. My feelings towards coding? It's a
            profound passion. My fondness for it drives me to realize my full potential.
            Lately, I've delved deeper into web design and development, gaining invaluable
            insights from tutorials, code samples, and ideas shared by friends and
            esteemed contributors. Most of my work involves PHP and JS, but it's essential
            to recognize that web coding is an amalgamation of languages like HTML, CSS,
            and JS. Once you master these languages, coding becomes a delightful and
            straightforward endeavor.
          </p>
        </div>
      </div>
      <!-- s1 -->
      <!-- s2 -->
      <div class="content-wrapper">
        <div class="text-start">
          <h2 class="underline underline-offset-1 text-lg">Capabilities</h2>
          <h1>My skills in the field of web development</h1>
          <p>
            <strong class="text-primary">7 years of professional work experience </strong>
            I am familiar with working in small teams as well as with the challenges of
            large projects where teams must coordinate like the precision of a Swiss
            watch.
          </p>
          <div class="capabilities mt-5 mb-5">
            <ul class="list-disc text-sm md:text-base ml-5 mr-7">
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
          <p>
            I am currently employed at
            <a
              href="https://epunks.de/blog/turbo-fuer-dein-seo-was-bedeutet-seo-eigentlich"
              >epunks</a
            >
            and hold the position of Head of Frontend and QA Engineer.
          </p>
          <br />
          <br />
          <strong>EDUCATION</strong>
          <div class="capabilities mt-5 mb-5">
            <ul class="list-disc text-sm md:text-base ml-5 mr-5">
              <li>Physik/IT Uni Bielefeld</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">Bachelor of Science - WS16/17</li>
              </ul>
              <li>Grafik Kommunikation FH Bielefeld</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">Bachelor of Arts - WS18/19</li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="text-start">
          <strong>WORK EXPERIENCE</strong>
          <div class="capabilities mt-5 mb-5">
            <ul class="list-disc text-sm md:text-base ml-5 mr-5">
              <li>Alasco Internship Munich (Web Development) - 2016</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Analytics dashboard using React integrating with data visualization
                  libraries like D3.js to provide insightful data representations.
                </li>
              </ul>
              <li>neue fische Cologne (FREELANCE Software Developer) - 2017</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  RESTful API using Express incorporating authentication and authorization
                  mechanisms to secure the endpoints.
                </li>
              </ul>
              <li>Clark Internship Berlin (Web Development) - 2017</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Task scheduling system enables asynchronous task execution and
                  background job processing.
                </li>
              </ul>
              <li>RTL Group Cologne Internship (Software Developer) - 2018</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Distributed system that can handle high traffic and ensure fault
                  tolerance by leveraging Apache
                </li>
              </ul>
              <li>Watergate Berlin (FREELANCE UI/UX Web Development) - 2018</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Real-time chat application using WebSockets and frameworks Socket.io
                  enabling instant messaging between users.
                </li>
              </ul>
              <li>Le Wagon (Web Developer) - 2019</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Build complete web applications and deploy online. DevOps
                </li>
              </ul>
              <li>
                Humboldt-Universität zu Berlin (FREELANCE Software Developer) - 2019
              </li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  Service that collects data from web sources using Puppeteer, and process
                  and store the data in a structured format.
                </li>
              </ul>
              <li>tva studio Cologne (FREELANCE Full-Stack Developer) - 2019</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  CDN using technologies like Nginx Cache to efficiently deliver static
                  assets and improve the performance of web applications.
                </li>
              </ul>
              <li>Zahnarzt-Helden Bielefeld (Web Designer) - 2019</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  A web project for renting out rental equipment and its related
                  management system
                </li>
              </ul>
              <li>epunks Bielefeld (Software Developer) - 2020 - 2023</li>
              <ul class="list-disc text-sm md:text-base ml-5 mr-5">
                <li class="text-sm">
                  A management system for the job search market with a multi-tenant
                  architecture.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <!-- s2 -->
      <!-- s3 -->
      <div class="content-wrapper">
        <div class="text-start">
          <h2 class="underline underline-offset-1 text-lg">My Story/My Career</h2>
          <h1>
            From frontend over design<br />
            to backend
          </h1>
          <img class="mt-8 md:mt-0" :src="aboutImgThree" alt="..." />
        </div>
        <div class="text-start">
          <p>
            I began experimenting with websites at the age of 14 and developed an interest
            in computer science early in my school years. However, after graduating from
            high school, I chose to study physics. This decision was partly influenced by
            my father being a physicist, and my longstanding fascination with physics and
            numbers
          </p>
          <p>
            As I reflect now, that decision was one of the best I could have made. Through
            it, I learned programming languages like C++ and Java. Meanwhile, I launched
            my own business and began developing websites, starting from simple landing
            pages to comprehensive online stores.
          </p>
          <p>
            After completing my studies in physics, the path became evident. I desired a
            professional career as a developer. At the same time, I always held a keen
            interest in design, particularly in UX/UI design, largely because I had
            designed numerous websites during my entrepreneurial phase.
          </p>
          <p>
            Currently, due to my commitment with ePunks, I am unable to accept any
            external requests or assignments.
          </p>
          <p>
            To further enrich my knowledge in this domain, I pursued a bachelor's degree
            at the University of Applied Sciences Bielefeld, specializing in graphic
            design and web development. During my academic years, I had the opportunity to
            freelance for various studios, gaining a valuable early insight into the
            industry dynamics and priorities.
          </p>
          <p>
            Thus, transitioning into the role of a frontend developer immediately after my
            graduation was seamless. This was preceded by an enriching journey across
            diverse development offices.
          </p>
        </div>
      </div>
      <!-- s3 -->
    </section>
  </main>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 0;
}

.text-start {
  width: 100%;
}

li a:hover {
  color: var(--text);
  background-color: var(--color-primary);
}

.nuxt-link-exact-active.nuxt-link-active {
  background-color: var(--color-primary);
  border-radius: 8px;
  padding-left: 0.5rem;
}

img,
svg {
  width: 100%;
  height: auto;
  object-fit: cover;
}

input {
  height: 2.6rem;
}

.capabilities {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3rem;
  }

  img,
  svg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
