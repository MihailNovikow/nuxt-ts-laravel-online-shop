<template>
  <div class="container mx-auto">
    <Html>
      <Head>
        <Title>NuxtShop - Главная</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
     <main>
        <section class="bg_main">
            <div class="bg_main_block">
                <div class="bg_main_block_text">
                    <h1>Стройматериалы для кровли</h1>
                    <p>
                        Большой ассортимент стройматериалов всегда на наших
                        складах
                    </p>
                </div>
                <button type="button" class="bg-button">
                    <a href="/">Перейти в Каталог</a>
                </button>
            </div>
            <div class="adv_block"
            v-for="adv in advanteges">
            <div class="adv_item">
                    <img :src="adv.img" :alt="adv.img" />
                    <p>{{ adv.title }}</p>
                </div>
                </div>
               <!-- <AdvL
                ist></AdvList>
                <div class="adv_item">
                    <img src="@/assets/img/stock.svg" alt="" />
                    <p>Самый крупный склад стройматериалов и Кровли в Курске</p>
                </div>
                <div class="adv_item">
                    <img src="@/assets/img/delivery.svg" alt="" />
                    <p>Самый крупный склад стройматериалов и Кровли в Курске</p>
                </div>
                <div class="adv_item">
                    <img src="@/assets/img/store.svg" alt="" />
                    <p>Самый крупный склад стройматериалов и Кровли в Курске</p>
                </div>
                <div class="adv_item">
                    <img src="@/assets/img/sample.svg" alt="" />
                    <p>Самый крупный склад стройматериалов и Кровли в Курске</p>
                </div>
            </div>-->
        </section>
        <section class="bg__catalogue">
            <h1 class="bg__catalogue__title">Каталог товаров</h1>
            <p class="bg__catalogue__description">
                Предлагаем широкий выбор стройматериалов для любых потребностей
                вашего бизнеса в наличии и под заказ. Вся продукция
                сертифицирована — гарантируем качество, надежность и
                соответствие нормативам ГОСТ и международным стандартам.
            </p>
            <div class="return__catalogue__block">
                <p class="">Перейти в каталог</p>
                <button class="return__catalogue__button">></button>
            </div>
            <div class="grid__catalogue">
                <ProductList
                 :products="products">
                </ProductList>

        <Categories
        ></Categories>
                <!--<div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Кровельные материалы
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img
                        src="@/assets/img/roof-materials.png"
                        alt="кровельные материалы"
                    />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Заборные ограждения
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/fence-railings.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Металлопрокат</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/rolled-metal.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Подкровельные пленки и мембраны
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/roofing-films.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Крепёж</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/fasteners.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Фасадные материалы
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/facade-materials.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Водосточные системы
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/drainage-systems.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Аксессуары для кровли
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/roof-accesories.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Элементы отделки кровли
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/finishing-elements.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Теплоизоляция</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/thermal-insulation1.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">
                            Чердачные системы
                        </h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/roof-elements.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Кирпич</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/brick.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Блоки</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/blocks.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Пиломатериалы</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/wood.png" alt="" />
                </div>
                <div class="catalogue__item-1">
                    <div class="catalogue__item-1_text">
                        <h1 class="catalogue__item-1__title">Сэндвич-панели</h1>
                        <p class="catalogue__item-1__description">
                            1 275 товаров
                        </p>
                        <img src="@/assets/img/next.svg" alt="" />
                    </div>
                    <img src="@/assets/img/sandwich-panels.png" alt="" />
                </div>-->
            </div>
        </section>
        <section class="special">
            <h1>Специальные предложения</h1>
            <div class="tabs__block">
                <div class="tabs__block_item">
                    <p>Акция</p>
                </div>
                <div class="tabs__block_item">Рекомендуем</div>
                <div class="tabs__block_item">Популярные</div>
                <div class="tabs__block_item">Новинки</div>
            </div>
            <div class="grid-special">
                <ProductList
                :limit="9"
                :products="recomended()"
                ></ProductList>
                <ProductList
                :limit="9"
                :products="popular()"
                ></ProductList>
                <ProductList
                :limit="9"
                :products="new()"
                ></ProductList>
                <!--<div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img src="@/assets/img/heart.svg" alt="" />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div class="grid-special__item">
                    <img
                        src="@/assets/img/heart.svg"
                        alt=""
                        class="img-item-special"
                    />
                    <img src="@/assets/img/metal-tile.png" alt="" />
                    <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                    <div class="grid-special__item__bottom">
                        <div class="price">
                            <p>330 ₽</p>
                            <s>375 ₽</s>
                        </div>
                        <button class="cart__btn">
                            <img src="@/assets/img/cart.svg" alt="" />
                        </button>
                    </div>
                </div>-->
            </div>
        </section>
        <section class="news">
            <div class="news__text">
                <h1>Новости и акции</h1>
                <div class="news__block-all">
                    <p>Все новости</p>
                    <button class="next__btn">></button>
                </div>
            </div>
            <div class="grid__news">
                <div class="grid__news__item">
                    <img src="@/assets/img/news-1.png" alt="" />
                    <h2>МЕТАЛЛОЧЕРЕПИЦА</h2>
                    <h3>
                        Композитная черепица Barcelona от производителя Grand
                        Line
                    </h3>
                    <p>18 июля 2022</p>
                </div>
                <div class="grid__news__item">
                    <img src="@/assets/img/news-2.png" alt="" />
                    <h2>СОВЕТЫ</h2>
                    <h3>Семь самых важных советов клиенту по ремонту крыши</h3>
                    <p>29 мая 2022</p>
                </div>
                <div class="grid__news__item">
                    <img src="@/assets/img/news-3.png" alt="" />
                    <h2>АКЦИЯ</h2>
                    <h3>Клинкерная плитка Terramatic для наружных работ</h3>
                    <p>30 апреля 2022</p>
                </div>
            </div>
        </section>
        <section class="partners">
            <div class="title__container">
                <h1>Наши партнеры</h1>
                <div class="button__container">
                    <button class="button-white-prev"></button>
                    <button class="button-white-next"></button>
                </div>
            </div>
            <div class="partners__container">
                <div class="partners__item">
                    <img src="@/assets/img/katepal.png" alt="" />
                </div>
                <div class="partners__item">
                    <img src="@/assets/img/docke.png" alt="" />
                </div>
                <div class="partners__item">
                    <img src="@/assets/img/shinglas.png" alt="" />
                </div>
                <div class="partners__item">
                    <img src="@/assets/img/roofshield.png" alt="" />
                </div>
                <div class="partners__item">
                    <img src="@/assets/img/tegola.png" alt="" />
                </div>
            </div>
        </section>
        <section class="refs">
            <div class="block-left">
                <img
                    src="@/assets/img/img-section-left.png"
                    alt=""
                    class="img-section-left"
                />
                <div class="img-section-left__wrapper">
                    <img
                        src="@/assets/img/rectangle-red.png"
                        alt=""
                        class="rectangle-red"
                    />
                    <p class="rectangle-red__text">Все для кровельщика</p>
                </div>
            </div>
            <div class="block-right">
                <img
                    src="@/assets/img/img-section-right.png"
                    alt=""
                    class="img-section-right"
                />
                <div class="img-section-right__wrapper">
                    <h1 class="title">Материалы к кровле</h1>
                    <p>Посмотреть 435 товаров</p>
                </div>
            </div>
        </section>
        <section class="submit">
            <div class="submit__container">
                <img src="@/assets/img/like.svg" alt="like" />
                <p>
                    Мы профессионалы, поэтому предлагаем только качественную и
                    проверенную временем продукцию!
                </p>
                <button class="submit__btn"><p>Оставить заявку</p></button>
            </div>
        </section>

        <section class="about">
            <div class="about__container">
                <img
                    src="@/assets/img/about-img.png"
                    alt=""
                    class="about-img"
                />
                <div class="about__wrapper">
                    <p>Лидер по продаже кровельных материалов</p>
                </div>

                <div class="about__text">
                    <h1>Как мы работаем?</h1>
                    <p>
                        У нас вы найдете все для строительства и ремонта крыш,
                        заборов и фасадов.
                    </p>
                    <h2>7 причин сотрудничать с «КРОВМОНТАЖ46»:</h2>
                    <div class="about-list">
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Бесплатный выезд замерщика в течение 3 часов с
                            момента оформления заявки.
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Составление сметы бесплатно!
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Оплата по факту получения товара.
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Минимальные сроки поставки.
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Вежливые сотрудники на складе, очень быстрая
                            отгрузка.
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Большой ассортимент продукции на складе.
                        </p>
                        <p>
                            <img
                                src="@/assets/img/complete.svg"
                                alt=""
                                class="complete"
                            />Низкая ценовая политика в Курской области.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="consultation">
            <div class="consultation__wrapper">
                <h1>
                    Звоните по номеру +7-962-380-09-49 или закажите консультацию
                </h1>
                <button class="submit__btn-green">Заказать консультацию</button>
            </div>
        </section>
        <section class="about-company">
            <div class="about-company__text">
                <h1>О компании</h1>
                <p>
                    «КРОВМОНТАЖ46» — дистрибьютор крупнейших производителей
                    кровельных материалов, таких как: «Металл Профиль», «Grand
                    Line», «RUUKKI», «Borge», «Velux», «Технониколь», «KatepaL»
                    и мн.др. Мы профессионалы, поэтому предлагаем только
                    качественную и проверенную временем продукцию! У нас Вы
                    найдете все для строительства и ремонта крыши, а также
                    заборов и фасадов. Помимо этого на сайте «КРОВМОНТАЖ46»
                    представлен широкий выбор аксессуаров для кровли!
                    Обратившись к нам, Вы всегда сможете получить
                    высококвалифицированную консультацию, достойный сервис и
                    индивидуальный подход.
                </p>
            </div>
            <div class="about-company__icons">
                <div class="about-company__icons-item">
                    <img src="@/assets/img/docke.png" alt="" />
                </div>
                <div class="about-company__icons-item">
                    <img src="@/assets/img/roofshield.png" alt="" />
                </div>
                <div class="about-company__icons-item">
                    <img src="@/assets/img/katepal.png" alt="" />
                </div>
                <div class="about-company__icons-item">
                    <img src="@/assets/img/shinglas.png" alt="" />
                </div>
            </div>
        </section>
    </main>
    <FeaturedProducts
      collectionHandle="frontpage"
      :numberProducts="4"
      title="Featured Products"
    />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@store/store";
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";
//import ProductCard from '@/components/ProductCard/ProductCard';
const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);
interface IProps {
  //product: Array,
}
const mainStore = useMainStore();
const new = () => {
      return mainStore.new();
    };
    onMounted(() => {
      products = mainStore.products;
    });
const props = defineProps<IProps>();
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
.container {
    padding-right: 0;
    padding-left: 0;
}
header {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
}
.header-top {
    background: #f4f5f7;
}
.header-top__wrapper {
    white-space: nowrap;
    display: flex;
    gap: 10%;
    padding: 10px 1% 10px 1%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.nav-left {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}
.city-check {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;

    /* #25313F */

    color: #25313f;
}
.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.menu_p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
}
.nav-right {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
}
.nav-right-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.call-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */

    display: flex;
    align-items: center;

    /* #25313F */

    color: #25313f;
}
.email-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;

    /* #4D4D4D */

    color: #4d4d4d;
}
.vuzv-zamer {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;

    /* #25313F */

    color: #25313f;
}
.return__catalogue__block {
    width: 100%;
    flex-direction: row;
    gap: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #4d4d4d;
    justify-content: flex-end;
}
.catalog {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 20px;
    gap: 20px;
    background: #8cc63f;
    border-radius: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */

    display: flex;
    align-items: center;

    /* #FFFFFF */
    text-decoration: none;
    color: #ffffff;
    border: none;
}
.catalog-icon {
    background: url("@/assets/img/catalogue-icon.svg");
    background-color: #ffffff;
    //background-position: 50% 50%;
    //background-repeat: no-repeat;
}
.catalog-icon:hover {
    background-color: #ffffff;
    background: url("@/assets/img/exit.svg");
    //background-position: 50% 50%;
    //background-repeat: no-repeat;
}
.header-input {
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 0px 20px;
    background: #ffffff;
    border: 1px solid #8cc63f;
    border-radius: 5px;
}
input {
    border: none;
}
.search-icon-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 10px;

    width: 48px;
    height: 48px;

    /* #8CC63F */

    background: #8cc63f;
    border-radius: 0px 5px 5px 0px;
}
.header-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    .header-bottom__wrapper {
        display: flex;
        gap: 20px;
        padding: 15px 2% 0 2%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
}

.header_bottom_center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */

    display: flex;
    align-items: center;
    text-align: center;

    /* #25313F */

    color: #25313f;
}
.header_bottom_left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.header_bottom_right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.header_bottom_right_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height, or 140% */

    display: flex;
    align-items: center;
    text-align: center;

    /* #4D4D4D */

    color: #4d4d4d;
}
.btn-call {
    width: 130px;
    height: 34px;
    /* Auto layout */
    /* Купить */

    /* 12/SemiBold */

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    color: #8cc63f;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 15px;
    gap: 10px;
    /* #FFFFFF */

    background: #ffffff;
    /* #8CC63F */

    border: 1px solid #8cc63f;
    border-radius: 5px;
}

.btn-call-text {
}

.nav {
    width: 100%;
    height: 400px;
    background: #ffffff;
    box-shadow: 0px 5px 20px rgba(34, 33, 33, 0.05);
}
.nav__container {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    gap: 5%;
    border-top: 2px solid #edeeef;
}
.nav__block-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 222px;
    border-right: 2px solid #edeeef;
}
.nav__wrapper-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 280px;
    height: 222px;

    border-right: 2px solid blue($color: #000000);
    box-shadow: 0px 5px 20px rgba(34, 33, 33, 0.05);
}
.nav__block-left_item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px 12px 20px;
    gap: 30px;

    width: 280px;
    height: 48px;

    /* #FFFFFF */

    background: #ffffff;
    border-radius: 5px;
    a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        /* #25313F */

        color: #25313f;
        text-decoration: none;
    }
    &:hover {
        background: #edeeef;
    }
}
.nav-border {
    height: 400px;

    /* #FFFFFF */

    background: #edeeef;
    /* Drop Shadow */

    box-shadow: 0px 5px 20px rgba(34, 33, 33, 0.05);
}
.nav__block-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        /* identical to box height, or 140% */

        /* #25313F */

        color: #25313f;
    }
    .nav__wrapper-right {
        padding: 0px;
        gap: 10px;
        width: 100%;
        height: 222px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        /* #4D4D4D */

        color: #4d4d4d;
        text-decoration: none;
    }
}
.bg_main {
    background: url("@/assets/img/roof.png");
    width: 100%;
    min-height: 180px;
    margin: 30px 0 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%; /* for IE 6 */
    display: flex;
    height: 490px;
    gap: 40px;
    flex-direction: column;
}

.bg__catalogue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 150px 5% 0 5%;
}

.bg_main_block {
    width: 660px;
    display: flex;
    /* align-items: center; */
    padding: 2% 0 0 10%;
    flex-direction: column;
}

.return__catalogue__button {
    display: flex;
    width: 24px;
    height: 24px;
    background: #8cc63f;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    align-items: center;
    justify-content: center;
}
/*
.bg_main__img {
    width: 100%;
    height: auto;
}*/
.bg_main_block_text {
    gap: 20px;
    h1 {
        font-family: "Halvar Breitschrift";
        font-style: normal;
        font-weight: 700;
        font-size: 52px;
        line-height: 66px;
        /* or 127% */

        /* #FFFFFF */

        color: #ffffff;
    }
    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        /* or 144% */

        /* #FFFFFF */

        color: #ffffff;
    }
}

.bg-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 40px;
    gap: 10px;

    left: 16.72%;
    right: 70.42%;
    top: 6.44%;
    bottom: 92.71%;
    width: 247px;
    height: 60px;

    /* #8CC63F */

    background: #8cc63f;
    border-radius: 5px;
    border: none;

    a {
        text-decoration: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        white-space: nowrap;
    }
}
.adv_block {
    padding: 40px 10% 50px 10%;
    width: 100%;
    /* height: 80px; */
    left: 320px;
    top: 580px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 19px;
    /* position: absolute; */
    /* left: 320px; */
    /* top: 620px; */
    justify-content: center;
}
.adv_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    height: 80ox;
    background: #ffffff;
    box-shadow: 0px 5px 20px rgba(63, 66, 69, 0.1);
    border-radius: 5px;
}
.grid__catalogue {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .catalogue__item-1 {
        display: flex;
        flex-direction: row;
        background: #f8f8fa;
        border-radius: 5px;
        align-items: flex-start;
        .catalogue__item-1_text {
            /* 18/Medium */
            h1 {
                font-family: "Inter";
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 26px;
                /* identical to box height, or 144% */

                /* #25313F */

                color: #25313f;
            }
        }
    }
}
.catalogue__item-1__description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    /* #73767D */

    color: #73767d;
}
.special {
    padding: 65px 5% 0 5%;
    width: 100%;
    /* height: 1072px; */
    background: #f7f7f9;
    display: flex;
    flex-direction: column;
    h1 {
        font-family: "Halvar Breitschrift";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        /* identical to box height, or 150% */

        /* #25313F */

        color: #25313f;
    }
    p {
    }
}
.tabs__block {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    justify-content: flex-start;
}
.tabs__block_item {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    gap: 10px;
    /* #FFFFFF */

    background: #ffffff;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 138% */
    text-align: center;

    /* #4D4D4D */
    cursor: pointer;
    color: #4d4d4d;
}

.tabs__block_item:hover {
    color: #ffffff;
    background: #8cc63f;
    cursor: pointer;
}

.grid-special {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 230px);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
}

.grid-special__item {
    padding: 20px;
    /* width: 305px; */
    /* height: 374px; */
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 5px 20px rgb(34 33 33 / 5%);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
}
.grid-special__item__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* gap: 30%; */
    width: 100%;
    p {
        display: flex;
        gap: 10px;
        s {
        }
    }
    .cart__btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 10px;
        gap: 5px;

        width: 44px;
        height: 40px;
        /* #8CC63F */

        background: #8cc63f;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
}
.price {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
}
.img-item-special {
    display: flex;
    justify-content: center;
    align-items: center;
}
.news {
    padding: 65px 5% 0 5%;
}
.news__block-all {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    p {
        display: flex;
        align-items: center;
        color: #4d4d4d;
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 10px;

        width: 24px;
        height: 24px;

        /* #8CC63F */
        color: #ffffff;
        background: #8cc63f;
        border-radius: 30px;
    }
}
.grid__news {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;
}
.news__text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.grid__news__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 15px;
    /* width: 413px; */
    /* height: 425px; */
    border-radius: 3px;
    img {
        width: 400px;
        /* background: linear-gradient(180deg, rgba(34, 71, 82, 0) 0%, #10252B 100%); */
        /* opacity: 0.3; */
        border-radius: 10px;
    }
    h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        /* identical to box height, or 150% */

        /* #25313F */

        color: #25313f;
    }
    h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        /* or 144% */

        /* #25313F */

        color: #25313f;
    }
    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        /* #999999 */

        color: #999999;
    }
}
.partners {
    padding: 65px 5% 0 5%;
    width: 100%;
    height: 380px;

    background: linear-gradient(0deg, #f7f7f9, #f7f7f9), #8cc63f;
    .title__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-family: "Halvar Breitschrift";
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 60px;
            /* identical to box height, or 150% */

            /* #25313F */

            color: #25313f;
        }
        .button__container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 14px;
            .button-white-prev {
                border: none;
                width: 32px;
                height: 32px;

                /* #FFFFFF */

                background: #ffffff;
                border-radius: 30px;
                transform: matrix(-1, 0, 0, 1, 0, 0);
                background-position: right 45% bottom 50%;
                background-image: url("@/assets/img/arrow-prev.svg");
                background-size: 17px 31px;
                background-repeat: no-repeat;
                cursor: pointer;
            }
            .button-white-next {
                border: none;
                width: 32px;
                height: 32px;

                /* #FFFFFF */

                background: #ffffff;
                border-radius: 30px;
                transform: matrix(-1, 0, 0, 1, 0, 0);
                background-position: right 45% bottom 50%;
                background-image: url("@/assets/img/arrow-next.svg");
                background-size: 17px 31px;
                background-repeat: no-repeat;
                cursor: pointer;
            }
            .button-white-prev:hover,
            .button-white-next:hover {
                background-color: #eda536;
                cursor: pointer;
                background-image: url("@/assets/img/svg/arrow_1_hover.svg");
            }
        }
    }
}
path,
circle {
    fill: none;
    stroke: #000;
    stroke-width: 2;
}

.partners__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}
.partners__item {
    width: 240px;
    height: 130px;
    left: 0px;
    top: 0px;

    /* #FFFFFF */

    background: #ffffff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
.refs {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* gap: 20px; */
    padding: 65px 5% 80px 5%;
    justify-content: center;
    font-family: "Halvar Breitschrift";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #25313f;
}

.img-section-left {
    width: 90%;
    position: relative;
}
.img-section-left__wrapper {
}
.rectangle-red {
    position: absolute;
    /* width: 468px; */
    height: 191px;
    left: 72px;
    top: 4349px;
}
.rectangle-red__text {
    position: absolute;
    width: 284px;
    height: 80px;
    left: 79px;
    top: 4398px;
    font-family: "Halvar Breitschrift";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
}
.img-section-right {
    width: 90%;
}
.img-section-right__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 30px;
    gap: 40px;
    position: absolute;
    width: 225px;
    height: 214px;
    left: 600px;
    top: 4100px;
    background: #ffffff;
    justify-content: space-between;
}

h1 {
    font-family: "Averta CY";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    display: flex;
    align-items: center;

    /* #111111 */

    color: #111111;
}
p {
    font-family: "Averta CY";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    /* #4D4D4D */

    color: #4d4d4d;
}

.submit {
    padding: 0 10% 0 10%;
    width: 100%;
    height: 130px;

    /* #8CC63F */

    background: #8cc63f;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url("/img/submit-section.png");

    .submit__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: #ffffff;
        p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            /* or 144% */

            text-align: center;

            /* #FFFFFF */

            color: #ffffff;
        }
    }
    .submit__btn {
        width: 231px;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 17px 40px;
        gap: 10px;
        background: #ffffff;
        border-radius: 5px;
        border: none;
        P {
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 26px;
            /* identical to box height, or 144% */

            display: flex;
            align-items: center;
            text-align: center;

            /* #8CC63F */

            color: #8cc63f;
        }
    }
}
.about {
    padding: 65px 10% 0 10%;
}
.about__container {
    display: flex;
    flex-direction: row;
    gap: 20%;
}
.complete {
    width: 16px;
    height: 11px;
}
.about-img {
    width: 522px;
    height: 500px;
    left: 320px;
    top: 4991px;

    /* #D9DADC */

    background: #d9dadc;
    border-radius: 10px;
}
.about__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 10px;
    position: absolute;
    width: 314px;
    height: 116px;
    left: 407px;
    top: 5089px;
    background: #8cc63f;
    box-shadow: 0px 7px 25px rgb(63 188 125 / 20%);
    border-radius: 10px;
    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        /* or 140% */

        /* #FFFFFF */

        color: #ffffff;
    }
}
.about__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
.about-list {
    display: flex;
    /* width: 503px; */
    gap: 15px;
    flex-direction: column;
    align-items: flex-start;
    p {
        display: flex;
        gap: 19px;
        flex-direction: row;
        align-items: flex-start;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */

        display: flex;
        align-items: center;

        /* #25313F */

        color: #25313f;
    }
}
.about-company {
    padding: 80px 5% 80px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10%;
}
.about-company__text {
    display: flex;
    flex-direction: column;
}
.about-company__icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 28px;
}
.about-company__icons-item {
    width: 250px;
    height: 130px;
    background: #ffffff;
    border: 1px solid #d9dadc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.consultation {
    position: relative;
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    width: 375px;
    height: 360px;
    /* left: 0px; */
    /* top: 7547px; */
    background: linear-gradient(0deg, #f7f7f9, #f7f7f9), #8cc63f;
    background: url("@/assets/img/bg-consult.png");
    align-items: center;
    justify-content: center;
}

footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background: #25313f;
}
.footer__container {
    padding: 65px 5% 65px 5%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: #ffffff;
    /* align-items: center; */
    justify-content: center;
    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height, or 138% */

        display: flex;
        align-items: center;

        /* #FFFFFF */

        color: #ffffff;
    }
    a {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;

        /* #D9DADC */

        color: #d9dadc;
    }
    .footer__block-catalog-1 {
        flex-direction: column;
        align-items: center;

        /* #D9DADC */
    }
    .footer__block-catalog-2 {
        flex-direction: column;
        align-items: center;
        padding-top: 45px;

        /* #D9DADC */
    }
    .footer__block-catalog-3 {
        flex-direction: column;
        align-items: center;
        padding-top: 45px;

        /* #D9DADC */
    }
    .footer__block-about {
        flex-direction: column;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;

        /* #D9DADC */

        a {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */

            display: flex;
            align-items: center;
            text-decoration: none;
            color: #d9dadc;
        }
    }
    .footer__block-right {
        flex-direction: column;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: flex-start;

        /* #D9DADC */
        h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            /* or 150% */

            /* #FFFFFF */

            color: #ffffff;
        }
        span {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height, or 138% */

            /* #EDEEEF */

            color: #edeeef;
            p {
                font-family: "Inter";
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height, or 143% */

                /* #FFFFFF */

                color: #ffffff;
            }
        }
    }

    .footer-call {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #ffffff;
        }
    }
    .footer-email {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            /* identical to box height, or 150% */

            /* #FFFFFF */

            color: #ffffff;
        }
    }

    a {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;
        text-decoration: none;
        color: #d9dadc;
    }
}

.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.policy {
    display: flex;
    width: 100%;
    height: 60px;
    /* left: 0px; */
    /* top: 0px; */
    background: #5f6f81;
    gap: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.submit__btn-green {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 40px;
    gap: 10px;
    background: #8cc63f;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: center;

    /* #FFFFFF */

    color: #ffffff;

    white-space: nowrap;
}
.next__btn {
    color: #ffffff;
    background: #25313f;
    border-radius: 50%;
    border: none;
}
.consultation__wrapper {
    /*padding: 0 5% 0 5%; */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-family: "Halvar Breitschrift";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        /* or 142% */

        text-align: center;

        /* #25313F */

        color: #25313f;
    }
}
.slider {
}

@media (max-width: 400px) {
    .header-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        justify-content: flex-start;
        .header-bottom__wrapper {
            display: flex;
            gap: 20px;
            padding: 15px 2% 0 2%;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
        }
    }

    .grid-special {
        width: 100%;
        display: flex;
        /* grid-template-columns: repeat(4, 230px); */
        /* grid-template-rows: repeat(2, 1fr); */
        gap: 20px;
        flex-direction: column;
    }

    .grid__catalogue {
        gap: 20px;
        display: flex;
        flex-direction: column;
    }

    .about-company {
        padding: 80px 5% 80px 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 10%;
    }
    .submit {
        padding: 0 10% 0 10%;
        width: 100%;
        height: 340px;
        background: #8cc63f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("@/assets/img/roof-bg.png");
    }
    .submit__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: #ffffff;
        flex-direction: column;
    }

    .about__container {
        display: flex;
        flex-direction: column;
        gap: 20%;
        align-items: flex-start;
        justify-content: center;
    }
    .about-company__icons {

    }
    .about-company__icons-item,
    .about-company__icons-item img {
        width: 157px;
        height: 100px;

        /* #FFFFFF */

        background: #ffffff;
        /* #D9DADC */

        border: 1px solid #d9dadc;
        border-radius: 10px;
    }
}
</style>
