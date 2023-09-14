<template>
  <div>
    <button @click="isOpen = true" class="btn block contact" type="button">
      <span class="inline-block text-sm">==> {{ $t("contactCTA") }}</span>
    </button>
    <div class="container">
      <div class="flex justify-start">
        <!-- Modal -->
        <div
          v-show="isOpen"
          class="modal flex items-start justify-start xs:items-center xs:justify-center z-20"
        >
          <div class="modal-form rounded-md">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">{{ $t("footerHeadline") }}</h3>
            </div>
            <div class="mt-4">
              <form
                @submit.prevent="submitForm"
                class="w-full"
                action="https://submit-form.com/x41Hbhrf"
              >
                <div class="flex flex-col md:flex-row items-center">
                  <p class="w-full">
                    <label class="block uppercase text-xs font-bold mb-2">Name: </label>
                    <input
                      v-model="name"
                      name="name"
                      class="mb-5 mb:mb-0 w-full"
                      placeholder="Name"
                      required=""
                    />
                  </p>
                  <p class="w-full m-0 pl-0 md:pl-5">
                    <label class="block uppercase text-xs font-bold mb-2">Email:</label>
                    <input
                      v-model="email"
                      class="mb-5 mb:mb-0 w-full"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </p>
                </div>
                <p class="mt-5 w-full">
                  <label class="block uppercase text-xs font-bold mb-2">
                    {{ $t("formMessage") }}:
                  </label>
                  <textarea name="message" class="w-full" v-model="message"></textarea>
                </p>
                <p class="mt-5 w-full mb-5">
                  <label class="block uppercase text-xs font-bold mb-2">
                    {{ $t("formRole") }}:
                  </label>
                  <select class="w-full" v-model="role" name="role" multiple>
                    <option value="recruiters">Recruiter</option>
                    <option value="companies">Company</option>
                    <option value="start_ups">Start Up</option>
                    <option value="companies">Artist</option>
                  </select>
                </p>
                <div class="flex flex-row items-center">
                  <p>
                    <button @click="isOpen = false" class="btn">
                      {{ $t("formCancel") }}
                    </button>
                  </p>
                  <p class="m-0 pl-5">
                    <button class="btn" type="submit">
                      {{ $t("formSend") }}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/x41Hbhrf";

export default {
  data() {
    return {
      isOpen: false,
      name: [],
      email: [],
      role: [],
      message: [],
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
<style lang="postcss" scoped>
@keyframes slind-in-modal {
  from {
    transform: translateY(-250px);
  }

  to {
    transform: translateY(0px);
  }
}

.modal {
  background-color: var(--bg-body);
  width: 100vw;
  height: 100vh;
  position: absolute;
  padding: 1rem;
  inset: 0;
  margin-left: 3rem;
  transform: translateY(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: slind-in-modal;
  animation-iteration-count: 1;
  animation-direction: alternate;
  border-bottom: 1px solid var(--text);
}

.modal-form {
  background-color: var(--bg-body);
}
</style>
