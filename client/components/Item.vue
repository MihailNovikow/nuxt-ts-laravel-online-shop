<template>
  <div class="col-lg-4 col-sm-6 product-cart">
    
    <div>{{ item.id }}</div> - <div>{{ item.title }}</div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, mounted } from "vue";
import { useStore, Store, State } from "@/store";
export default defineComponent({
  name: "Item",
  props: ["item"],
  setup() {
    const csrf: String = "";
    const active: Boolean = true;
    
    mounted(() => {
      this.csrf = document.head.querySelector(
        'meta[name="csrf-token"]'
      ).content;
    });
    return {
      csrf,
      active,
      slide
    };
  },
});
</script>

