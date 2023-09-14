<script lang="ts" setup></script>

<template>
  <ul class="flex">
    <!-- Twitter-->
    <li class="flex items-center">
      <a
        class="pl-3 pr-1 md:pl-3 md:pr-2 py-2 flex items-center text-xs uppercase font-bold"
        href="https://twitter.com/nathan_tawfik"
        alt="shady tawfiks twitter account"
        target="_blank"
        aria-label="shady tawfiks twitter account"
      >
        <i class="bx bxl-twitter bx-sm"></i>
      </a>
    </li>
    <!-- Twitter-->
    <!-- Github-->
    <li class="flex items-center">
      <a
        class="px-1 md:px-2 py-2 flex items-center text-xs uppercase font-bold"
        href="https://github.com/ModernAmusements"
        alt="shady tawfiks github account"
        target="_blank"
        aria-label="shady tawfiks github account"
      >
        <i class="bx bxl-github bx-sm"></i>
      </a>
    </li>
    <!-- Github-->
  </ul>
</template>

<script>
export default {
  name: "social",
};
</script>

<style lang="postcss" scoped>
.bx {
  color: var(--text);
}

.bx:hover {
  color: var(--color-primary);
}
</style>
