<template>
  <section>
    <modal v-model="showModal" size="lg" :footer="false" @hide="myCallback" ref="modal" id="modal-demo">
      <div v-html="modalHtml"></div>
    </modal>
  </section>
</template>

<script lang="ts" setup name="modal-wrapper">
import { mounted } from "vue";
import { useMainStore } from "@/store/store";
//import { useStore, Store, State } from "@/store";
    const mainStore = useMainStore();
    let showModal = mainStore.showModal;
    let modalHtml = mainStore.modalHtml;
    const myCallback = () => {
    };
mounted(() => {
    mainStore.openModel(data);
});
</script>

<style scoped>

</style>
