<template>
  <div class="contact">
    <span
      class="px-3 py-2 lang-dropdown-toggle flex items-center text-xs font-bold"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="d-icon w-6 h-6 m-auto"
      >
        <path
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="var(--text)"
        class="h-4 w-4 text-white dark:text-dark"
      >
        <g transform="rotate(90 12 12)">
          <path d="M9 5l7 7-7 7"></path>
        </g>
      </svg>
    </span>
    <div
      ref="popoverDropdownRef"
      class="text-base lang-dropdown z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
export default {
  name: "IndexDropdown",
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
  watch: {
    $route() {
      (this.dropdownPopoverShow = false), (this.isOpen = false);
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
<style lang="postcss">
.contact {
  z-index: 0;
}

.lang-dropdown-toggle {
  cursor: pointer;
  display: none;
}

.d-icon {
  stroke: var(--text);
}

.d-icon:hover {
  stroke: var(--color-primary);
}

.lang-dropdown {
  background-color: var(--bg-header);
  padding: 0.5rem;
  margin-top: 1rem;
  border-width: 1px;
  border-color: var(--color-primary-400);
}
</style>
