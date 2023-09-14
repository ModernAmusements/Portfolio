<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/x41Hbhrf";
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
          role: this.role,
        }),
      });
      this.$router.push("/success");
      this.isOpen = false;
    },
  },
};
</script>
<template>
  <footer class="pt-8 pb-4">
    <div>
      <div class="flex flex-wrap text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h3>{{ $t("footerHeadline") }}</h3>
          <h5 class="text-lg mt-0 mb-2">
            {{ $t("footerCopy") }}
          </h5>
          <div class="flex mt-6 lg:mb-0 mb-6">
            <form
              @submit.prevent="submitForm"
              class="w-full"
              action="https://submit-form.com/x41Hbhrf"
            >
              <div class="flex flex-row items-center">
                <p class="m-0 pl-0">
                  <label class="block uppercase text-xs font-bold mb-2">Email:</label>
                  <input
                    class="mb-5 mb:mb-0 w-full"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </p>
                <p class="m-0 pl-5">
                  <button class="btn footer-send" type="submit">
                    {{ $t("formSend") }}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="lg:w-6/12">
          <div class="flex flex-wrap items-top mb-6">
            <div class="pl-4">
              <span
                class="block uppercase dark:text-primary-400 text-sm font-bold mb-2 underline"
              >
                {{ $t("footerLinkHeadline") }}
              </span>
              <ul class="list-unstyled">
                <li>
                  <nuxt-link
                    to="/privacy"
                    class="dark:text-primary-400 btn font-semibold block py-2 mb-2 text-sm"
                  >
                    ==> {{ $t("footerTermLink") }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 pl-4 xl:pl-20">
              <span
                class="block uppercase dark:text-primary-400 text-sm font-bold mb-2 underline"
              >
                {{ $t("footerUseLinks") }}
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://developer.mozilla.org/en-US/"
                  >
                    AMDN Web Docs
                  </a>
                </li>
                <li>
                  <a
                    class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://replit.com/"
                  >
                    Replit
                  </a>
                </li>
                <li>
                  <a
                    class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://fonts.google.com/"
                  >
                    Google Fonts
                  </a>
                </li>
                <li>
                  <a
                    class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://www.producthunt.com/"
                  >
                    Producthunt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-6" />
      <div class="flex flex-wrap items-start justify-start">
        <div class="w-full pl-3 pt-3 text-start">
          <div class="text-sm font-semibold">Copyright © {{ date }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer-send {
  padding: 1rem;
}

li.flex-1 {
  padding: 0 1rem;
}

.nuxt-link-exact-active.nuxt-link-active {
  @apply font-bold cursor-default;
  background-color: var(--color-primary);
  border-radius: 8px;
  padding-left: 0.5rem;
}

footer {
  width: 100%;
  border-top: 1px solid var(--text);
}

hr {
  border: 0;
  border-top: 1px solid var(--text);
}
</style>
