<template>
<div class="container">
    <div class="container_top">
        <div class="exit" @click="!toggleMenu"><img src="" alt="exit" /></div>
        <div class="city_check">
            <img src="" alt="city_check">
            <p>{{city}}</p>
        </div>
        <div class="links">
            <img src="" alt="">
            <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.path" class="link_top">
                {{link.img}}
                <p>{{ link.label }}</p>
            </NuxtLink>
        </div>
    </div>
    <div class="container_center">
        <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.path" class="link_center">
            <p>{{ link.label }}</p>
        </NuxtLink>
    </div>
    <div class="container_bottom">
        <div class="link_bottom">
            <img src="" alt="phone" />
            <p>+7-962-380-09-49</p>
        </div>
        <div class="link_bottom">
            <img src="" alt="email">
            <p>info@krovmontag46.ru</p>
        </div>
        <div class="link_bottom">
            <img src="" alt="pencil">
            <p>Вызвать замерщика</p>
        </div>
<!--
        <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.path" class="link_bottom">

            <p>{{ link.label }}</p>
        </NuxtLink>-->
    
        <button type="submit" 
        class="submit__btn"
        >Заказать звонок</button>
    </div>
</div>
</template>
<!--
<script setup>
    import { mobMenuLinks } from "~/constants";
    import { useShopStore } from "~/stores/shop";
    import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
    
    const shopStore = useShopStore();
    const mobMenuOpen = computed(() => shopStore.mobMenuOpen);
    
    const route = useRoute();
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobileUI = breakpoints.smaller("md");
    const menu = ref(null);
    
    watch(route, () => (isMobileUI ? shopStore.toggleMenu(false) : null));
    </script>-->
    
<style lang="scss">
    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0px;
        gap: 20px;
    
    .container_top {
        border-bottom:2px solid #D9DADC;
    }
    .cantainer_center {
        border-bottom:2px solid #D9DADC;
    }
}
    .exit {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 0px;
        top: 0px;
    }

    .city_check {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 5px;

        position: absolute;
        left: 5.33%;
        right: 75.73%;
        top: 3.08%;
        bottom: 93.97%;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 15px;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;

        width: 84px;
        height: 24px;
    }
    .submit__btn {
        display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 15px;
gap: 10px;


/* #FFFFFF */

background: #FFFFFF;
/* #8CC63F */

border: 1px solid #8CC63F;
border-radius: 5px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
text-align: center;

/* #8CC63F */

color: #8CC63F;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
    }
</style>