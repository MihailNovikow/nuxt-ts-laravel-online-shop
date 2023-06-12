<template>
  <div>
    <p>{{ property.name }}</p>
    <template v-if="property.type === 'selector'">
      <div v-for="(property_value, idx) in property.property_values" class="checkbox">
        <label>
          <input type="checkbox" v-model="checked[idx].value" @change="filter('checked')">
          {{ property_value.value }}
        </label>
      </div>
    </template>
    <template v-else>
      <div class="form-group">
        <input type="number" :id="'select-property-min-' + property.id" class="form-control"
               placeholder="min" v-model="min" @change="filter('min_max')">
      </div>
      <div class="form-group">
        <input type="number" :id="'select-property-max-' + property.id" class="form-control"
               placeholder="max" v-model="max" @change="filter('min_max')">
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { created } from "vue"
//import { useStore, Store, State } from "@/store";
import { useMainStore } from "@/store/store";
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";
  const props = defineProps<IProps>('property');

const mainStore = useMainStore();
const shopStore = useShopStore();
    const min = null;
      const max = null;
      const checked = [];

created(() => {
    if (this.property.type === 'selector') {
        this.property.property_values.forEach(val => {
            this.checked.push({ id: val.id, value: false })
        })
    } else {
        min = null;
        max = null;
    }
});
const parseValues = (option) => {
    if (option === 'checked') {
        return this.checked.filter(item => item.value);
    }
    return [min, max]
};
const filter = (option) => {
    const values = this.parseValues(option);
    mainStore.productFilter({ property_id: props.property.id, option: option, value: values });
    //    emit('update:product_filter',{ property_id: props.property.id, option: option, value: values });

    // store.commit("product_filter", { property_id: this.property.id, option: option, value: values });
    /*this.emitter.emit('product_filter', { property_id: this.property.id, option: option, value: values }
    )*/
};
</script>

<style scoped>
</style>
