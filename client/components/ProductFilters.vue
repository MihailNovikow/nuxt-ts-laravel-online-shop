<template>
  <div>
    <h4 class="header">Filters:</h4>
    <div v-for="property in properties">
      <ProductFilter :property="property"/>
    </div>
    <button class="btn btn-block btn-sm btn-primary" @click="apply">Apply</button>
  </div>
</template>

<script lang="ts" setup>
import { created } from "vue"
//import { useStore, Store, State } from "@/store";
import useMainStore from "@store/store";
let filters: Array<[]> = [];
let properties:Array<[]> = [];

    const mainStore = useMainStore();
    created(() => {
      console.log('created');
        getProperties();
        getProductFilter()
    }),
    const getProductFilter = () => {

        filters = mainStore.getProductFilter(filters);
},
    const apply = () => {
     // store.commit("product_filters", { filters: filters });
        mainStore.productFilters({ filters: filters });
    };
    const getProperties = () => {
      axios.get(mainStore.getbaseUrl + '/filter/properties/')
        .then(res => {
          properties = res.data?.data ?? []
        })
        .catch(e => (console.log(e)))
    }



  /*const emits = defineEmits<{(e: typeof product_filters, items: object): void }>(),
  setup(props, { emit }) {
    const apply = () => {
      const items = { filters: filters };
      emit(product_filters, items);
    },},*/
</script>

<style scoped>
</style>
