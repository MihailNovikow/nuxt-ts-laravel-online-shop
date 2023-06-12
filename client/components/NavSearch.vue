<template>
  <div>
    <div class="col-sm-4 col-md-5 col-lg-4 general-nav-col">
      <form role="search" class="navbar-form">
        <div class="input-group col-xs-12">
          <input type="text" class="form-control" placeholder="Search" id="nav-search"
                 v-model="keyword">
          <div class="input-group-btn">
            <button class="btn btn-default" type="button" id="nav-search-btn"
                    @click.prevent="search">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup name="nav-search">
import {axios} from "axios";
import {  mounted } from "vue";
  import { useMainStore } from "@/store/store";
const props = defineProps<IProps>('searchUrl');
    let keyword: String = '';
    const search = () => {
      if (keyword.trim()) {
        if (window.location.pathname === '/shop' || window.location.pathname === '/') {
          useMainStore.productSearch({keyword: keyword});

          return;
        }

        window.location = window.location.origin + '/shop?keyword=' + keyword;
      }
    };
</script>

<style scoped>
</style>
