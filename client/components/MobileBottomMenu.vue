<template>
    <div class="container">
        <NuxtLink to="/" class="menu_item">
            <img src="@/assets/img/home_mob_link.svg" alt="" />
            <p>Главная</p>
        </NuxtLink>
        <NuxtLink to="/" class="menu_item">
            <img src="@/assets/img/catalog_mob_link.svg" alt="" />
            <p>Главная</p>
        </NuxtLink>
        <NuxtLink to="/" class="menu_item">
            <img src="@/assets/img/cart_mob_link.svg" alt="" />
            <p>Главная</p>
        </NuxtLink>
        <NuxtLink to="/" class="menu_item">
            <img src="@/assets/img/favourite_mob_link.svg" alt="" />
            <p>Главная</p>
        </NuxtLink>
        <NuxtLink to="/" class="menu_item">
            <img src="@/assets/img/login_mob_link.svg" alt="" />
            <p>Главная</p>
        </NuxtLink>
    </div>
</template>
<style lang="scss">
.container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    background: #ffffff;
    box-shadow: 0px -3px 10px rgba(63, 66, 69, 0.1);
}
.menu_item {
    width: 75px;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        /* identical to box height, or 150% */

        text-align: center;

        /* #73767D */

        color: #73767d;
        &:hover {
            color: #8CC63F;
        }
    }
}
</style>
