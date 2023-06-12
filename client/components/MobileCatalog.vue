<template>
    <div class="container">
        <div class="top_block">
            <h1>Каталог</h1>
        </div>

        <NuxtLink
      v-for="link in mobCatalogLinks"
      :key="link.label"
      :to="link.path"
      class="item"
    >
      <p>{{ link.label }}</p>
      <img src="" alt="return" />
    </NuxtLink>

    </div>
</template>
<!--
<script setup>
import { navLinks } from "~/constants";
import { useShopStore } from "~/stores/shop";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const shopStore = useShopStore();
const menuOpen = computed(() => shopStore.menuOpen);

const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobileUI = breakpoints.smaller("md");
const menu = ref(null);

watch(route, () => (isMobileUI ? shopStore.toggleMenu(false) : null));
</script>-->

<style lang="scss">
.container {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 7.88%;

    /* #FFFFFF */

    background: #ffffff;
}
.top_block {
    background: #f9f9fa;
    h1 {
        font-family: "Halvar Breitschrift";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        /* identical to box height, or 150% */

        /* #25313F */

        color: #25313f;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;

        width: 335px;
        height: 676px;
    }
    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 89px;

        width: 335px;
        height: 26px;
        border-top: 1px solid #d9dadc;
        border-bottom: 1px solid #d9dadc;

        p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            /* identical to box height, or 144% */

            /* #25313F */

            color: #25313f;
        }
        img {
            background: url("@/asets/img/return.svg");
        }
        &:hover {
            color: #8cc63f;
            img {
                background: url("@/asets/img/return_active.svg");
            }
        }
    }
}
</style>
