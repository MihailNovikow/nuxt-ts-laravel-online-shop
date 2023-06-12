<template>
  <li><a :href="$baseUrl +'/cart'"><img height="22" width="25" :src="$baseUrl + '/images/cart-icon.png'">
    Items: <span
        id="nav-items">{{ count }}</span>
    Total: <span
        id="nav-total">{{ total }}</span>
  </a>
  </li>
</template>

<script lang="ts" setup name="nav-cart">
import {axios} from "axios";
import { mounted } from "vue"
import useMainStore from "@store/store";
const mainStore = useMainStore();
    let count: Number = 0;
    let total: Number = 0;

    mounted(() => {
        mainStore.navCart();
        count = mainStore.count;
        total = mainStore.total;

      axios.get(this.$baseUrl + '/cart/content')
        .then(response => {
          this.count = response.data.data.items;
          this.total = Math.round(response.data.data.total * 100) / 100;
        })
        .catch(e => {
          if (e.response && e.response.status === 401) {
            console.log(e.response)
          } else {
            console.log(e)
          }
        });
    });
</script>

<style scoped>

</style>
