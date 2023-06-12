<template>
  <div>
    <div v-for="(product, index) in products"><!--v-for="product in products"-->
        <ProductCard
            :index="index"
            :key="product.node.id"
            :product="product.node"
          />
      <!--<ProductCard :product="product" />-->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { created, watch, mounted } from "vue";
  import {useMainStore} from "@/store/store";
  import {useShopStore} from "@/stores/shop";
import { axios } from 'axios';
import ProductCard from "@/components/ProductCard/ProductCard";
  const props = defineProps<{
      keyword: string;
      category: string;
      productsArray: Array<[]>;
  }>();
const mainStore = useMainStore();
const shopStore = useShopStore();
    const products: Array<[]> = props.productsArray;
    const csrf: String = '';
    const filter: Object = {};


    watch(props.category, (oldVal, newVal) => {
      console.log(oldVal, newVal)
    });
    const searchProducts = (props.keyword) => {
      axios.get(mainStore.baseUrl + '/search', { params: { keyword } })
        .then(response => {
         mainStore.productFilter({ property_id: null, option: null, value: null });
          products = response.data.data;
        })
        .catch(e => {
          if (e.response && e.response.status === 401) {
            console.log(e.response)
          } else {
            console.log(e)
          }
        });
    };
    const filterProducts = (data) => {
      axios.get(mainStore.baseUrl + '/filter', { params: data })
        .then(response => {
          products = response.data.data;
        })
        .catch(e => {
          if (e.response && e.response.status === 401) {
            console.log(e.response)
          } else {
            console.log(e)
          }
        });
    };
    const parseFilterValues = (filters) => {
      const query = {};
      filters.forEach(filter => {
        if (Array.isArray(filter.value)) {
          let values = [];
          if (filter.option === 'checked') {
            filter.value.forEach(item => {
              if (item.value) {
                values.push(item.id);
              }
            });
          } else {
            values = filter.value;
          }
          query['values_' + filter.property_id] = values.join(',');
        }
      });

      return query;
    };
    const parseCategory = () => {
      let category_id = null;
      const path = window.location.pathname.split('/');
      const idx = path.indexOf('category');
      if (idx >= 0 && parseInt(path[idx + 1]) > 0) {
        category_id = parseInt(path[idx + 1]);
      }

      return category_id;
    };
    created(() => {
      csrf = document.head.querySelector('meta[name="csrf-token"]').content;
      emitter.on('product_search', data => {
        searchProducts(data.keyword);
      });
      emitter.on('product_filters', data => {
        const filters = parseFilterValues(data.filters);
        filters.category_id = filters?.category_id;
        filters = filters
        filterProducts(filters)
      })
    });
mounted(() => {
    if (category !== null) {
        filterProducts({ category: category })
    } else {
        searchProducts(keyword);
    }
    emitter.on('category_changed', categoryId => {
        if (categoryId) {
            filters.category_id = categoryId
            filterProducts(filters)
        }
    })
});

</script>

<style lang="scss" scoped>
.product-cart {
  margin-bottom: 15px;

  .cart-wrapper {
    border: 1px solid gray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;

    .cart-header {
      height: 6em;
      position: relative;
    }

    .effect {
      margin-top: 5px;

      .glyphicon {
        vertical-align: top;
        -webkit-transition: 0.6s ease-out;
        -moz-transition: 0.6s ease-out;
        transition: 0.6s ease-out;
      }

      .glyphicon.up {
        -webkit-transform: rotateZ(180deg);
        -moz-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
      }

      .glyphicon-triangle-bottom {
        cursor: pointer;
      }
    }

    .thumbnail {
      a:hover {
        text-decoration: none;
      }

      .img-wrapper {
        width: 100%;
        padding-bottom: 100%; /* your aspect ratio here! */
        position: relative;
        height: 20em;

        .product-shop-desc {
          text-align: justify;
          padding: 0px 7px;
        }

        img {
          position: relative;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
