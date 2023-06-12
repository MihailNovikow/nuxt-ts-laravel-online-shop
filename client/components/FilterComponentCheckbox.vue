<template>
  <div class="sidebar__filters sidebar__list">
    <a
      href="javascript:void(0);"
      class="filter file__get df aic jcb"
      :class="'active'"
    >
      <span class="filter__item">{{ allfilters.title }}</span>
      <span v-if="allfilters.all" class="num-counter brs5 dif aic jcc">{{
        allfilters.all
      }}</span>
    </a>

    <ul class="check-list">
      <li class="filter-check" v-for="cat in allfilters.catArr" :key="cat.cat">
        <label class="checkbox-block" :class="{ active: checkElem[cat.cat] }">
          <input
            type="checkbox"
            :id="cat.cat"
            :value="cat.cat"
            v-model="checkedElem"
            @click="setCheckbox(cat.cat)"
          />
          <span>{{ cat.cat }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
//const checkElem: Object = {};
        const checkedElem: Array<[]> = [];
           const status: String = '';

    interface IProps {
 allfilters: Object;
}
const props = defineProps<IProps>();
mounted(() => {
  allfilters.catArr.forEach((el) => {
    checkElem[el.cat] = false
  })
});
const emit = defineEmits(['remove']);
    watch: {
       function checkedElem(newVAl, oldVal) {
         if (newVAl)
           checkElem[status] = !checkElem[status];
         emit('filter', checkedElem);
       }
    }

    const setCheckbox = (data) => {
      status = data;
    }
</script>

<style scoped></style>
