<template>
    <header class="desktop_header">
        <div class="header-top">
            <div class="header-top__wrapper">
                <div class="nav-left">
                    <div class="city-check">
                        <img src="@/assets/img/pin.png" alt="" />
                        <p class="city-text">Курск</p>
                    </div>
                    <div class="menu">
                        <p class="menu_p">О компании</p>
                        <p class="menu_p">Доставка</p>
                        <p class="menu_p">Оплата</p>
                        <p class="menu_p">Контакты</p>
                    </div>
                </div>
                <div class="nav-right">
                    <div class="nav-right-wrapper">
                        <div class="nav_item">
                            <img src="@/assets/img/call.svg" alt="" />
                            <p class="call-text">+7-962-380-09-49</p>
                        </div>
                        <div class="nav_item">
                            <img src="@/assets/img/email.svg" alt="" />
                            <p class="email-text">info@krovmontag46.ru</p>
                        </div>
                        <div class="nav_item">
                            <img
                                src="@/assets/img/pencil-ruler.svg"
                                alt=""
                                class=""
                            />
                            <p class="vuzv-zamer">Вызвать замерщика</p>
                        </div>
                    </div>
                    <button type="button" class="btn-call">
                        <p class="btn-call-text">Заказать звонок</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="header-bottom__wrapper">
                <div class="header_bottom_left">
                    <div class="header-logo">
                        <img
                            class="header-logo"
                            src="@/assets/img/header-logo.png"
                            alt="Logo"
                        />
                    </div>
                    <Logo />
    <Navigation />
    <CartIcon />
                    <button @click="catalogOpen" class="catalog">
                        <div class="catalog-icon"></div>
                        Каталог
                    </button>
                    <div></div>
                    <div class="header-input">
                        <input
                            type="search"
                            class=""
                            name=""
                            id=""
                            value=""
                            placeholder="Поиск среди 20000 + товаров"
                        />
                        <div class="search-icon-block">
                            <img
                                src="@/assets/img/search.svg"
                                alt=""
                                class="search-icon"
                            />
                        </div>
                    </div>
                </div>
                <div class="header_bottom_center">
                    <img src="@/assets/img/sale.svg" alt="" />
                    <p class="sale-text">Акции</p>
                    <p>Распродажа</p>
                    <p>Новинки</p>
                    <p>Монтаж</p>
                    <p>Галерея</p>
                </div>
                <div class="header_bottom_right">
                    <div class="header_bottom_right_item">
                        <img
                            src="@/assets/img/account_header.svg"
                            alt="account"
                        />
                        <p>Личный кабинет</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img
                            src="@/assets/img/heart_header.svg"
                            alt="favourites"
                        />
                        <p>Избранное</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img src="@/assets/img/chart.svg" alt="" />
                        <p>Сравнение</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img src="@/assets/img/cart_header.svg" alt="" />
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
        </div>

        <nav class="nav">
            <div v-if="catalog = true">
                <div class="nav__container">
                    <div class="nav__block-left">
                        <div class="nav__wrapper-left">
                            <div class="nav__block-left_item">
                                <div @click="categoryOpen">Кирпич/блоки</div>
                                <img
                                    src="@/assets/img/arrow-next-nav.svg"
                                    alt=""
                                />
                            </div>
                            <div class="nav__block-left_item">
                                <a href="">Кровельные материалы</a>
                                <img
                                    src="@/assets/img/arrow-next-nav.svg"
                                    alt=""
                                />
                            </div>
                            <div class="nav__block-left_item">
                                <a href="">Заборы и ограждения</a>
                                <img
                                    src="@/assets/img/arrow-next-nav.svg"
                                    alt=""
                                />
                            </div>
                            <div class="nav__block-left_item">
                                <a href="">Фасадные материалы</a>
                                <img
                                    src="@/assets/img/arrow-next-nav.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div v-if="category">
                        <div class="nav__block-right">
                            <h1>Кровельные материалы</h1>
                            <div class="nav__wrapper-right">
                                <a href="">Металлочерепица</a>
                                <a href="">Гибкая черепица</a>
                                <a href="">Композитная черепица</a>
                                <a href="">Натуральная черепица</a>
                                <a href="">Сопутствующие товары</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <header class="mobile_header">
        <!--<MobileHeader />-->
        <div class="header-top">
            <div class="header-top__wrapper">
                <div class="nav-left">
                    <div class="city-check">
                        <img src="@/assets/img/pin.png" alt="" />
                        <p class="city-text">Курск</p>
                    </div>
                    <!--<div class="menu">
                    <p class="menu_p">О компании</p>
                    <p class="menu_p">Доставка</p>
                    <p class="menu_p">Оплата</p>
                    <p class="menu_p">Контакты</p>
                </div>-->
                </div>
                <div class="nav-right">
                    <div class="nav-right-wrapper">
                        <img src="@/assets/img/call.svg" alt="" />
                        <img src="@/assets/img/email.svg" alt="" />
                        <img
                            src="@/assets/img/pencil-ruler.svg"
                            alt=""
                            class=""
                        />
                    </div>
                    <button type="button" class="btn-call">
                        <p class="btn-call-text">Заказать звонок</p>
                    </button>
                </div>
            </div>
            <Hamburger class="md:hidden" />
        </div>

        <div class="header-bottom">
            <div class="header-bottom__wrapper">
                <div class="header_bottom_left">
                    <div class="header-logo">
                        <img
                            class="header-logo"
                            src="@/assets/img/header-logo.png"
                            alt="Logo"
                        />
                    </div>
                    <Logo />
    <Navigation />
    <CartIcon />
                    <button class="catalog" @click="catalogHandler">
                        <img
                            src="@/assets/img/catalog-icon.svg"
                            class="catalog-icon"
                        />
                        Каталог
                    </button>

                    <div v-if="catalog">
                        <CatalogMenu />
                    </div>
                    <div class="search__btn" @click="searchHandler">
                        <div v-if="search">
                            <input
                                type="search"
                                class=""
                                name=""
                                id=""
                                value=""
                                placeholder="Поиск среди 20000 + товаров"
                            />
                            <div class="search-icon-block">
                                <img
                                    src="@/assets/img/search.svg"
                                    alt=""
                                    class="search-icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header_bottom_center">
                    <img src="@/assets/img/sale.svg" alt="" />
                    <p class="sale-text">Акции</p>
                    <p>Распродажа</p>
                    <p>Новинки</p>
                    <p>Монтаж</p>
                    <p>Галерея</p>
                </div>
                <!--
<div v-if="navbar">

</div>-->
                <div class="header_bottom_right">
                    <div class="header_bottom_right_item">
                        <img
                            src="@/assets/img/account_header.svg"
                            alt="account"
                        />
                        <p>Личный кабинет</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img
                            src="@/assets/img/heart_header.svg"
                            alt="favourites"
                        />
                        <p>Избранное</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img src="@/assets/img/chart.svg" alt="" />
                        <p>Сравнение</p>
                    </div>
                    <div class="header_bottom_right_item">
                        <img src="@/assets/img/cart_header.svg" alt="" />
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
const catalog: boolean = false;
const category: boolean = false;
const catalogOpen = () => {
    catalog = !catalog;
};
const categoryOpen() => {
    category = !category;
};
</script>
<style lang="scss">
.desktop_header {
    display: flex;
    flex-direction: column;
}

.mobile_header {
    display: none;
}

.nav_item {
    display: flex;
    align-items: center;
    gap: 10px;
}
@media (max-width: 768px) {
    //
}

@media (max-width: 400px) {
    .desktop_header {
        display: none;
    }

    .mobile_header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
}
</style>
