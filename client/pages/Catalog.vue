<template>
  <div class="catalog__container">
    <h1 class="catalog__title">Каталог</h1>

    <button class="mobile_filter_btn">
      <img src="./assets/img/filter.svg" alt="mobile_filter" />
      <p>Фильтры</p>
    </button>
    <!--<div v-if="mobileFilter">
				<FilterMobile />
			</div>-->
    <div class="catalog__wrapper">
      <!--<FilterDesktop />-->
      <ProductFilters></ProductFilters>
      <div class="filter">
        <div class="filter__wrapper">
          <AccordionList>
            <AccordionItem>
              <div id="summary"><h2>Цена, ₽</h2></div>
              <div id="icon"><span class="arrow-up"></span></div>
              <div class="filter__block">
                <div class="price__inputs">
                  <input type="text" placeholder="От" class="price__input" />
                  <input type="text" placeholder="До" class="price__input" />
                </div>
              </div>
            </AccordionItem>
          </AccordionList>
          <!--<slider />-->
          <!--Список категорий фильтров, внутри которого отдельные фильтры с чекбоксами-->
          <div
            v-for="(filter, index) in filterCategories"
            :key="filter.id"
            class="filter__block"
          >
            <AccordionList>
              <AccordionItem>
                <div id="summary">
                  <h2>
                    {{ filter.title
                    }}<!--Цвет-->
                  </h2>
                </div>
                <div id="icon"><span class="arrow-up"></span></div>
                <!--один фильтр-->
                <div
                  class=""
                  v-if="filter.title === 'Цвет' && filter.category === 'color'"
                >
                  <div v-for="filter_row in filterData()" class="list__item">
                    <!--filterData(filter.category)-->
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      v-model="options.color"
                    />
                    <div class="color1">{{ filter_row.name }}</div>
                    <p>
                      {{ filter_row.val
                      }}<!--RAL 7024-->
                    </p>
                  </div>
                </div>
              </AccordionItem>
            </AccordionList>
            <!--<div class="list__item">
              <input type="checkbox" name="" id=""  v-model="form.color"/>
              <div class="color1"></div>
              <p></p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""  v-model="form.color"/>
              <div class="color1"></div>
              <p>RAL 3005</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""  v-model="form.color"/>
              <div class="color1"></div>
              <p>RAL 6005</p>
            </div>
            <p @click="showAll === true" class="show-all">Показать все</p>
            <div v-if="showAll === true"></div>
          </div>
          <div class="filter__block">
            <h2>Толщина, м</h2>
            <div class="list__item">
              <input type="checkbox" name="" id=""  v-model="form.width" />
              <p>0,4</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>0,44</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>0,45</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>0,5</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>0,6</p>
            </div>
          </div>
          <div class="filter__block">
            <h2>Основа покрытия</h2>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Полиуретан</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Полиэстер</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Полиэфир</p>
            </div>
          </div>
          <div class="filter__block">
            <h2>Покрытие</h2>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Atlas</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Drap</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id=""   v-model="form.width"/>
              <p>Drap ST</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id="" />
              <p>GreenCoat</p>
            </div>
            <div class="list__item">
              <input type="checkbox" name="" id="" />
              <p>Quarzit</p>
            </div>
            <p @click="toggleShow" class="show-all">Показать все</p>
            <div v-if="showAll === true"></div>
          </div>
          <div class="filter__block"></div>-->
          </div>
          <div class="filter__btn_block">
            <button class="btn-green">
              Показать товаров: 1489
              <!--{{ products.count }}-->
            </button>
            <button class="btn-gray" @click="resetFilters">
              <img src="./assets/img/exit.svg" alt="" />
              Сбросить фильтры
            </button>
          </div>
        </div>

        <div class="content">
          <div
            class="grid-special"
            v-for="(product, index) in filteredProducts"
            :key="product.id"
          >
            <ProductCard
              :product="product"
              :title="product.title"
              :img="staticHost + product.img"
            ></ProductCard>

            <!--<div class="grid-special__item">
            <img src="./assets/img/heart.svg" alt="" />
            <img src="./assets/img/metal-tile.png" alt="" />
            <p>
              {{ product.name }}
              Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см
            </p>
            <div class="grid-special__item__bottom">
              <div class="price">
                <p>{{ product.price_new }}330 ₽</p>
                <s>{{ product.price_old }}375 ₽</s>
              </div>
              <button class="cart__btn" @click="addToCart">
                <img src="./assets/img/cart.svg" alt="" />
              </button>
            </div>
          </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store/store";
//import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';

//import { useStore } from '@/store';
//import { productsActionTypes } from '@/store/modules/products/action-types';

import FilterDesktop from "@/components/FilterDesktop";
import FilterMobile from "@/components/FilterMobile";

import ProductCard from "@/components/ProductCard/ProductCard";
import ProductList from "@/components/ProductList";
import ProductFilters from "@/components/ProductFilters";

    const mainStore = useMainStore();
    onMounted(() => {
      products = mainStore.products;
       filters = mainStore.filters;
    });
    const filter = (array = [], filters = {}) => {
      //Object.keys возвращает ключи
      const keys = Object.keys(filters).filter((key) =>
        filters.hasOwnProperty(key)
      ); //есть этот же ключ, что и в фильтре
      return array.filter((elem) => {
        const commonKeys = keys.filter((key) => elem.hasOwnProperty(key));
        return commonKeys.reduce(
          (flag, key) => flag && filters[key].includes(elem[key]),
          true
        );
      });
    };
    const filteredProducts = filter(products, filters);
    const staticHost = "@/public/img";
    //массив фильтров
    //products.product.categories[item] = filters.filter.categories[item]
    let products: Array<[]> = [
      {
        id: 1,
        name: "p1",
        categories: ["paint"],
        color: "RAL 7024",
      },
      {
        id: 2,
        name: "p2",
        categories: ["brick"],
        width: "100",
      },
    ];
    let filters: Array<[]> = [
      {
        id: 1,
        name: "color",
        options: [
          { id: 1, categories: ["paint"], name: "RAL 7024" },
          { id: 2, categories: ["paint"], name: "RAL 7025" },
          { id: 3, categories: ["paint"], name: "RAL 7027" },
          { id: 4, categories: ["paint"], name: "RAL 7028" },
          { id: 5, categories: ["paint"], name: "RAL 7029" },
          { id: 6, categories: ["paint"], name: "RAL 7000" },
          { id: 7, categories: ["paint"], name: "RAL 7336" },
        ],
      },
      {
        id: 2,
        name: "width",
        options: [
          { id: 1, categories: ["paint", "brick"], name: "100" },
          { id: 2, categories: ["paint", "brick"], name: "150" },
          { id: 3, categories: ["paint", "brick"], name: "200" },
          { id: 4, categories: ["paint", "brick"], name: "250" },
        ],
      },
    ];
    const category = $route.category;
    const activeFilters: Array<[]> = [];
    const url = `/catalog/${category}`;
    const data = {
      //category_id
    };

    const fetchProducts = () => {
      //'/catalog/{category}', [\App\Http\Controllers\Pages\CategoryController::class, 'index']
      const data = {
        category: category,
        page: state.page,
        limit: state.limit,
      };
      mainStore.fetchProducts(url, data);
    };
    const resetFilters = () => {
      mainStore.resetFilters();
    };
    /*async function fetchProducts() {
      try {
        await store.dispatch(productsActionTypes.FETCH_PRODUCTS, '1');
      } catch (error) {
        console.error('fetchProducts', error);
      }
    };*/
    //option (color например)
    function filterData(() => {
      let data = [];
      // если есть выбранные чекбоксы
      //if (category.length)
      if (activeFilters.length) {
        // фильтруем данные products.product.color которые есть в выбранных фильтрах
        data = products.filter(
          (product) =>
            activeFilters.indexOf(product.color.toString()) != -1 //проверка на сущ-е элем в массиве activeFilters
        );
      } else {
        // иначе отдаем все данные из массива
        data = products;
      }
      return data;
    });

    
</script>
