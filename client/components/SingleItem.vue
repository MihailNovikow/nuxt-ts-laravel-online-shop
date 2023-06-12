<template>
    <div>
        <div class="row">
            <div class="col-sm-7">
                <form method="post" :action="$baseUrl+'/cart/add-to-cart'">
                    <p>{{ itemData.description }}</p>
                    <p>Price: <span id="single-price">{{ itemData.priceRange }}</span></p>
                    <input type="hidden" name="_token" :value="csrf">
                    <input type="hidden" name="productId" :value="itemData.title"><!--.id-->
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <label class="control-label" for="single-productQty">QTY</label>
                            <input type="number" class="form-control" name="productQty"
                                   id="single-productQty" placeholder="QTY" v-model="qty"
                                   min="1" max="99" required>
                        </div>

                    </div>
                    <div>Total: {{total}}</div>
                    <button class="btn btn-primary" type="submit">ADD TO CART</button>
                </form>
            </div>
            <div class="col-sm-5">
                <img class="img-thumbnail" :alt="'product id'+itemData.title"
                     width="400" height="300"
                     :src="$baseUrl+'/images/'+itemData.images"><!--.id-->
            </div>
        </div>
        <div class="row" v-for="property in itemData.properties">
            <div class="col-sm-7">
                {{property.name}}&nbsp;:&nbsp;{{property.value}}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
  itemData: ProductCard;
}>();
   const src = props.itemData?.images?.edges[0]?.node?.url ?? "";

    const csrf: string = '';
    const qty: number = 1;
computed(
    total() {
        return Math.round(props.itemData.priceRange * 100) * qty / 100;
    }
);
mounted(() => {
    csrf = document.head.querySelector('meta[name="csrf-token"]').content;
});

</script>
