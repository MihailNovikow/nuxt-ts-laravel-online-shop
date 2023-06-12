<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <a v-if="!isRoot" :href="baseUrl + '/shop'">Shop</a>
        <template v-for="(parentCatalog, idx) in parentCatalogs">
          &nbsp;<small class="glyphicon glyphicon-arrow-right"></small>&nbsp;
          <a :class="idx < 1 ? 'active-catalog': ''" :data-id="parentCatalog.id"
             v-on:click.stop.preven="toCategory(parentCatalog.id)"
          >
            {{ parentCatalog.name }}
          </a>
        </template>
      </div>
    </div>
    <div class="row">
      <template v-for="(catalog, idx) in catalogs">
        <div class="col-xs-3 col-sm-2 col-md-1">
          <a v-on:click.stop.preven="toCategory(catalog.id)">{{ catalog.name}}</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup name="categories">
import {axios} from "Axios"
import { computed, created } from "vue";
//import { useStore, Store, State } from "@/store";
import { useMainStore } from "@/store/store";
import Category from "@/types/Category";
 const mainStore = useMainStore();
  const props = defineProps({});
   // const store = useStore();
    const emit = defineEmits(['update:category_changed']);
    let parentCatalogs: Array<[]> = [];
let catalogs: Array<[]> = [];
const baseUrl = mainStore.baseUrl;
    const toCategory = (id) => {
      getCategories(id);
     // emit('update:category_changed', id);
        mainStore.categoryChanged(id);
    },
    const getCategories = (id) => {
      axios.get(baseUrl + '/shop/category/' + id)
        .then(res => {
          parentCatalogs = res.data.data?.parentCatalogs ?? []
          catalogs = res.data.data?.catalogs ?? []
        })
        .catch(e => (console.log(e)))
    };

  created(() => {
  getCategories(0)
});

const isRoot = computed(() => {
  return parentCatalogs.length === 0
});
const lastElemFlag = computed(() {
  return parentCatalogs.length
});
</script>

<style scoped>

</style>
