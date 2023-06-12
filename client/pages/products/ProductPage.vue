<template>
     <!--<MainLayout>
          <Breadcrumbs></Breadcrumbs>-->

  <h1 class="title">{{ product.title }}Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</h1>
<div class="article">
<p>{{ product.article }}Артикул: 82146048</p>
  <!--<div class="flex justify-between gap-30 border-b-2 border-gray-200">-->
      <div class="compare_block">
      <!--<div class="flex items-start gap-10">-->
          <div class="compare_block_item">
          <img src="@/assets/img/heart_header.svg" alt="like" />
          <p>В избранное</p>
      </div>
      <!--<div class="flex items-start gap-10">-->
          <div class="compare_block_item">
          <img src="@/assets/img/chart.svg" alt="like" />
          <p>Сравнить</p>
      </div>
  </div>
</div>
  
  <!--<div class="flex items-start gap-20">-->
      <div class="product_summary">
     <!-- <div class="flex flex-col gap-10">-->
      <div class="img_small_block">
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_1.png" alt="img_small_1" class="img_small_item">
          </div>
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_2.png" alt="img_small_2" class="img_small_item">
          </div>                
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_3.png" alt="img_small_3" class="img_small_item">
          </div>

          <div class="img_small_video">
              <img src="" alt="videoplay">
              {{ product.img_small_video }}
          </div>
      </div>
      
      <div class="product_slider">
        <!--<Carousel>


    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :image="imagess[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="product_img">
              {{ slide }} Slide
              {{ product.img }}
          <img src="@/assets/img/product_img.png" alt="product_img">
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
-->



          <!--<div class="btn_slider"><img src="" alt="prev" /></div>
          {{ product.img }}
          <img src="@/assets/img/product_img.png" alt="product_img">
          <div class="btn_slider"><img src="" alt="next" /></div>
        </Carousel>-->
      </div>
      <div class="img_small_block_mobile">
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_1.png" alt="img_small_1" class="img_small_item">
          </div>
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_2.png" alt="img_small_2" class="img_small_item">
          </div>                
          <div class="img_small">
              {{ product.img_small }}
              <img src="@/assets/img/product_img_small_3.png" alt="img_small_3" class="img_small_item">
          </div>

          <div class="img_small_video">
              <img src="" alt="videoplay">
              {{ product.img_small_video }}
          </div>
      </div>
      <!--<div class="flex flex-col gap-35">-->
          <div class="right_summary_block">
          <!--<div class="flex flex-col items-start gap-15 p-0">-->
              <div class="characteristics_block">
              <h1>Характеристики</h1>
              <div v-for="info_row in info_rows" :key="info_row.id" limit="5">
                  <div class="info_row">
                      <p>{{info_row.name}}</p>
                      <div class="info_border"></div>
                      <p>{{ info_row.value }}</p>
                  </div>

              </div>
              <p class="all_characteristics" @Click="toggleCharacteristics">
                  Все характеристики
              </p>
              <div v-if="characteristics">
                  <div v-for="info_row in info_rows" :key="info_row.id">
                      <div class="info_row">
                          <p>{{info_row.name}}</p>
                          <div class="info_border"></div>
                          <p>{{ info_row.value }}</p>
                      </div>
                  </div>
              </div>
              <!--<div class="flex flex-col items-start gap-15 p-0 border-5 border-gray-200">-->
                  <div class="delivery">
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>

              </div>
</div>

              <!--<div 
            class="
          flex flex-col items-start gap-15 p-0 border-10 border-gray-200">--->
              <div class="add_to_cart_common_block">
                  <div class="availible_block">
                      <img src="@/assets/img/complete_green.svg" alt="availible" />
                      <p>{{product.avaliable}}В наличии</p>
                  </div>
                  <div class="thickness">
                      <p>Толщина</p>
                      <div class="thickness_block">
                          <div class="btn_secondary_normal">
                              0.44
                          </div>
                          <div class="btn_secondary_normal">
                              0.44
                          </div>
                          <div class="btn_secondary_normal">
                              0.44
                          </div>
                          <div class="btn_secondary_normal">
                              0.44
                          </div>

                      </div>
                  </div>
                  <div class="qty_block">
                      <button class="qty_item">
                          -
                      </button>
                      <p>{{total_qty}}2</p>
                      <button class="qty_item">
                          +
                      </button>
                  </div>
                  <div class="price_block">
                      <h3>{{product.price_new}}330 ₽/шт</h3>
                      <p>{{product.price_old}}375 ₽</p>
                  </div>
                  <div class="cart_btn_block">
                      <div class="cart_btn">
                          <img src="" alt="add_to_cart" />
                          <p>В корзину</p>
                      </div>
                      <div class="consult_btn">
                          <p>Заказать консультацию</p>
                      </div>
                  </div>
              </div>
              
      </div><div class="characteristics_block_mobile">


              <h1>Характеристики</h1>
              <div v-for="info_row in info_rows" :key="info_row.id" limit="5">
                  <div class="info_row">
                      <p>{{info_row.name}}</p>
                      <div class="info_border"></div>
                      <p>{{ info_row.value }}</p>
                  </div>

              </div>
              <p class="all_characteristics" @Click="toggleCharacteristics">
                  Все характеристики
              </p>
              <div v-if="characteristics">
                  <div v-for="info_row in info_rows" :key="info_row.id">
                      <div class="info_row">
                          <p>{{info_row.name}}</p>
                          <div class="info_border"></div>
                          <p>{{ info_row.value }}</p>
                      </div>
                  </div>
              </div>
              <div class="delivery">
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>
                  <div class="delivery_row">
                      <img src="" alt="delivery" />
                      <p>Доставка от 525 руб. с 12:00 до 15:00, при заказе до 11:00</p>
                  </div>

              </div>
              <!--<div class="flex flex-col items-start gap-15 p-0 border-5 border-gray-200">-->
                  
</div>
  </div>
  <div class="tabs_block">
      <div class="tab_item">
          <p>Описание</p>
      </div>
      <div class="tab_item">
          <p>Характеристики</p>
      </div>
      <div class="tab_item">
          <p>Документы</p>
      </div>
      <div class="tab_item">
          <p>Отзывы</p>
      </div>
      <div class="tab_item">
          <p>Доставка и оплата</p>
      </div>

  </div>
  <div class="description_block">
      <div class="descriprtion_item">
          <p>Стальная черепица — долговечный кровельный материал, востребованный в Москве. Это
              профилированные стальные листы c полимерным покрытием Полиэстер — оно защищает сталь от
              воздействия неблагоприятных факторов. Применяется при монтаже различных объектов —
              административных и частных.</p>
      </div>
      <div class="descriprtion_item">
          <h3>Профиль ЛАМОНТЕРРА:</h3>
          <p>Профиль Ламонтерра — один из наиболее популярных видов металлочерепицы. Этот стройматериал
              имеет необходимый запас прочности, надёжен и относительно дёшево стоит. Но его большая
              распространённость связана с риском приобрести фальсификат. В целях защиты от мошенников
              Компания Металл Профиль снабжает свои товары особой маркировкой. Она расположена в боковом
              замке металлочерепицы. Эта отметка гарантирует качественные характеристики продукции и
              ответственность производителя.</p>
      </div>
      <div class="descriprtion_item">
          <h3>Профиль ЛАМОНТЕРРА:</h3>
          <p>Профиль Ламонтерра — один из наиболее популярных видов металлочерепицы. Этот стройматериал
              имеет необходимый запас прочности, надёжен и относительно дёшево стоит. Но его большая
              распространённость связана с риском приобрести фальсификат. В целях защиты от мошенников
              Компания Металл Профиль снабжает свои товары особой маркировкой. Она расположена в боковом
              замке металлочерепицы. Эта отметка гарантирует качественные характеристики продукции и
              ответственность производителя.</p>
      </div>
      <div class="descriprtion_item">
          <h3>Профиль ЛАМОНТЕРРА:</h3>
          <p>Профиль Ламонтерра — один из наиболее популярных видов металлочерепицы. Этот стройматериал
              имеет необходимый запас прочности, надёжен и относительно дёшево стоит. Но его большая
              распространённость связана с риском приобрести фальсификат. В целях защиты от мошенников
              Компания Металл Профиль снабжает свои товары особой маркировкой. Она расположена в боковом
              замке металлочерепицы. Эта отметка гарантирует качественные характеристики продукции и
              ответственность производителя.</p>
      </div>
  </div>
  <div class="related">
      <h1>Вам могут понадобиться</h1>
      <!--<div v-for "card in cards" 
:key="card.id"
:card_img="card.img"
:card_name="card.name"
:card_price_old="card.price_old"
:card_price_new="card.price_new"
:favourite="card.favourite">
<Carousel>
<ProductCard></ProductCard></Carousel>
              
</div>-->
      <div class="related_items">
          <div class="related_item">
              <div class="grid-special__item">
                  <img src="@/assets/img/heart.svg" alt="">
                  <img src="@/assets/img/metal-tile.png" alt="">
                  <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                  <div class="grid-special__item__bottom">
                      <div class="price">
                          <p>330 ₽</p>
                          <s>375 ₽</s>
                      </div>
                      <button class="cart__btn"><img src="@/assets/img/cart.svg" alt=""></button>
                  </div>
              </div>
          </div>

          
          <div class="related_item">
              <div class="grid-special__item">
                  <img src="@/assets/img/heart.svg" alt="">
                  <img src="@/assets/img/metal-tile.png" alt="">
                  <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                  <div class="grid-special__item__bottom">
                      <div class="price">
                          <p>330 ₽</p>
                          <s>375 ₽</s>
                      </div>
                      <button class="cart__btn"><img src="@/assets/img/cart.svg" alt=""></button>
                  </div>
              </div>
          </div>
          <div class="related_item">
              <div class="grid-special__item">
                  <img src="@/assets/img/heart.svg" alt="">
                  <img src="@/assets/img/metal-tile.png" alt="">
                  <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                  <div class="grid-special__item__bottom">
                      <div class="price">
                          <p>330 ₽</p>
                          <s>375 ₽</s>
                      </div>
                      <button class="cart__btn"><img src="@/assets/img/cart.svg" alt=""></button>
                  </div>
              </div>
          </div>
          <div class="related_item">
              <div class="grid-special__item">
                  <img src="@/assets/img/heart.svg" alt="">
                  <img src="@/assets/img/metal-tile.png" alt="">
                  <p>Металлочерепица Супер Монтеррей, 6 волн, 225 x 118 см</p>
                  <div class="grid-special__item__bottom">
                      <div class="price">
                          <p>330 ₽</p>
                          <s>375 ₽</s>
                      </div>
                      <button class="cart__btn"><img src="@/assets/img/cart.svg" alt=""></button>
                  </div>
              </div>
          </div>
      </div>
  </div>

<!--</MainLayout>-->
</template>
<!---
<script>
/**  
    export default {


       
         components: {
            ProductPage,
        },*/
        /*data: [

            {
                id: 1,
                name: 'Цвет',
                value: {{ product.color }}
      },
    {
        id: 2,
            name: 'Цвет',
                value: { { product.color } }
    },
    {
        id: 3,
            name: 'Цвет',
                value: { { product.color } }
    },
    {
        id: 4,
            name: 'Цвет',
                value: { { product.color } }
    },
    {
        id: 5,
            name: 'Цвет',
                value: { { product.color } }
    },
    {
        id: 6,
            name: 'Цвет',
                value: { { product.color } }
    },
    ];

    data () {
      return {
       images: [
        {
            id:1,
            src: "/"
            alt: "1"
        },
        {
            id:2,
            src: "/"
            alt: "2"
        },
        {
            id:3,
            src: "/"
            alt: "3"
        },
        {
            id:4,
            src: "/"
            alt: "4"
        },
        {
            id:5,
            src: "/"
            alt: "5"
        },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },

    methods: {
        toggleCharacteristics() {
            openCharacteristics(characteristics == !characteristics)
        }
    }
  }*/
</script>-->
<style lang="scss">
.img_small {
    background: #ffffff;
    /* #8CC63F */

    border: 2px solid #8cc63f;
    border-radius: 5px;
}

.img_small_video {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    /* #D9DADC */

    border: 1px solid #d9dadc;
    border-radius: 5px;
    background: url("/img/videp_play.svg");
}

.product_summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}

.img_small_block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
}

.img_small_block_mobile {
    display: none;
}

.product_slider {
    position: relative;
    background: #ffffff;
    /* #D9DADC */

    border: 1px solid #d9dadc;
    border-radius: 10px;
}

.btn_slider {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    /* #FFFFFF */

    background: #ffffff;
    border-radius: 30px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.right_summary_block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 35px;

}

.characteristics_common {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
}

.characteristics_block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 0;
}

.characteristics_block_mobile {
    display: none;
}

.info_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*border-bottom: 1px dashed #D9DADC;*/
}

.info_border {
    border-bottom: 1px dashed #d9dadc;
}

.delivery {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    /*gap: 15px;*/
    background: #FFFFFF;
    /* #D9DADC */

    border: 1px solid #D9DADC;
    border-radius: 5px;
    width: 338px;

}

.delivery_row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* or 143% */

        display: flex;
        align-items: center;

        /* #111111 */

        color: #111111;
    }
}

.add_to_cart_common_block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    background: #FFFFFF;
    /* #EDEEEF */

    border: 1px solid #EDEEEF;
    box-shadow: 0px 5px 20px rgba(34, 33, 33, 0.1);
    border-radius: 10px;
}

.availible_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        /* #25313F */

        color: #25313F;
    }
}

.thickness {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;
        text-align: center;

        /* #111111 */

        color: #111111;
    }
}

.thickness_block {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
}

.btn_secondary_normal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;
    gap: 10px;

    width: 65px;
    height: 36px;

    /* #F9F9FA */

    background: #F9F9FA;
    /* #D9DADC */

    border: 1px solid #D9DADC;
    border-radius: 5px;

    &:hover {
        background: #8CC63F;
        /* #8CC63F */

        border: 1px solid #8CC63F;
        border-radius: 5px;

        p {
            color: #FFFFFF;
        }
    }
}

.qty_block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    width: 290px;
    height: 40px;
    background: #FFFFFF;
    /* #D9DADC */

    border: 1px solid #D9DADC;
    border-radius: 5px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;
        text-align: center;

        /* #111111 */

        color: #111111;
    }

}

.qty_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 10px;

    width: 30px;
    height: 30px;

    /* #F9F9FA */

    background: #F9F9FA;
    border-radius: 5px;
    border: none;
}

.price_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: red;
    }

    p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        text-decoration-line: line-through;

        /* #999999 */

        color: #999999;
    }
}

.cart_btn_block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
}

.cart_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 15px;
    gap: 10px;


    width: 290px;
    height: 50px;


    /* #8CC63F */

    background: #8CC63F;
    border-radius: 5px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        /* #FFFFFF */

        color: #FFFFFF;
    }
}

.consult_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
    gap: 10px;
    /* #F9F9FA */

    background: #F9F9FA;
    /* #D9DADC */

    border: 1px solid #D9DADC;
    border-radius: 5px;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;
        text-align: center;

        /* #4D4D4D */

        color: #4D4D4D;
    }
}

.article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
}

.compare_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;

}

.compare_block_item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-items: center;
    padding: 0px;
    gap: 10px;
}

.img_small_item {
    background: #FFFFFF;
    /* #D9DADC */

    border: 1px solid #D9DADC;
    border-radius: 5px;
}

.tabs_block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    .tab_item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 40px;
        gap: 10px;

        width: 240px;
        height: 50px;

        /* #F9F9FA */

        background: #F9F9FA;
        /* #D9DADC */

        border: 1px solid #D9DADC;
        border-radius: 5px;

        &:hover {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 14px 40px;
            gap: 12px;

            width: 240px;
            height: 50px;

            /* #FFFFFF */

            background: #FFFFFF;
            /* #D9DADC */

            border-width: 0px 1px 1px 1px;
            border-style: solid;
            border-color: #D9DADC;
            border-radius: 2px 2px 5px 5px;
            border-top: 2px solid #8CC63F;
            color: #8CC63F;
        }

        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height, or 143% */

            display: flex;
            align-items: center;
            text-align: center;

            /* #25313F */

            color: #25313F;

            &:hover {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                /* identical to box height, or 138% */

                display: flex;
                align-items: center;
                text-align: center;

                /* #8CC63F */

                color: #8CC63F;

            }

        }
    }
}

.description_block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    .descriprtion_item {
        gap: 20px;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */


        /* #25313F */

        color: #25313F;
    }

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        /* identical to box height, or 140% */


        /* #25313F */

        color: #25313F;
    }
}

.related {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20% 20px 20%;
    gap: 40px;
    background: #F7F7F9;

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height, or 133% */


        /* #25313F */

        color: #25313F;
    }
}

.related_items {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

}

.related_item {
    width: 305px;
    height: 374px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        /* or 138% */


        /* #111111 */

        color: #111111;
    }

    .product_card_bottom_block {}

    .product_card_price_block {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 10px;
    }

    h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: red;

    }

    p.price_old {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        text-decoration-line: line-through;

        /* #999999 */

        color: #999999;
    }
}

.desktop_header {
    display: flex;
    flex-direction: column;
}

.mobile_header {
    display: none;
}

@media(max-width: 768px) {
    //
}

@media(max-width: 400px) {
    .desktop_header {
        display: none;
    }

    .mobile_header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .catalog {
        width: 150px;
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 20px;
        gap: 10px;

        /* #8CC63F */

        background: #8CC63F;
        border-radius: 5px;
    }

    .search__btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px;
        gap: 10px;


        width: 48px;
        height: 48px;


        /* #FFFFFF */

        background: #FFFFFF;
        /* #D9DADC */

        border: 1px solid #D9DADC;
        border-radius: 5px;
    }

    .right_summary_block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 35px;
    }

    .product_summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
    }

    .img_small_block {
        display: none;
    }

    .img_small_block_mobile {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    }

    .characteristics_block {
        display: none;
    }

    .characteristics_block_mobile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        padding: 0;
    }
}
</style>
