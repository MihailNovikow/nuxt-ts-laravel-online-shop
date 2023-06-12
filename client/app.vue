<template>
  <Header />
  <Cart />
  <main class="min-h-[75vh] px-4">
    <!--<div
      v-if="
        config.SHOPIFY_STOREFRONT_ENDPOINT &&
        config.SHOPIFY_STOREFRONT_ACCESS_TOKEN
      "
    ></div><div v-else></div>-->
      <NuxtPage />


  </main>
  <Footer />
</template>

<script lang="ts" setup>
import "~/assets/css/tailwind.css";
import { useShopStore } from "~/stores/shop";
//import { AccordionList, AccordionItem } from "vue3-rich-accordion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
useMeta({
  htmlAttrs: {
    lang: "en",
  },
});

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

const config = useRuntimeConfig();
</script>
