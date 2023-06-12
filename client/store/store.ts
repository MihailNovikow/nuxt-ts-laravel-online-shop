import { Categories } from './../.nuxt/components.d';
//import { Categories } from '@/types/Categories';
//import { Product } from '@/types/Product';
//import { Item } from '@/types/Item';
import { generateFakeData, Product, Item } from "@/models/product.model";
import { defineStore } from "pinia";

export type RootState = {
    products: Product[];
    items: Item[];
    categories: Category[];
};

export const useMainStore = defineStore({
    id: "mainStore",
    state: () =>
    ({
        showModal: false,
        modalHtml: '',
        baseUrl: '/',
        items: [],
        item: {
            id: null,
            title: "",
            description: "",
            published: false,
        } as Item,
        products: [],
        filters: [],
        categories: [],
        page: "",
        limit: 20,
        count:  0;
         total: 0;
    } as RootState),
    getters: {
        getBaseUrl() {
            return state.baseUrl;
        }
    new() {
        let new = this.products.filter(p => p.category == 'new');
            return new;
        }
     popular() {
        let new = this.products.filter(p => p.category == 'popular');
            return new;
        }
    recomended() {
        let new = this.products.filter(p => p.category == 'recomended');
            return new;
        },
        getProductFilter(val) {
            this.productFilter();
            return val = this.filters;
        },
    },
    actions: {
        navCart(data) {
            this.count = data.items
            this.total = Math.round(data.total * 100) / 100
        },
        openModel(data) {
            this.modalHtml = data.html;
            this.showModal = true;
        },
        filterProducts(data) {
            axios.get(this.baseUrl + '/filter', { params: data })
                .then(response => {
                    this.products = response.data.data;
                })
                .catch(e => {
                    if (e.response && e.response.status === 401) {
                        console.log(e.response)
                    } else {
                        console.log(e)
                    }
                })
        },
        categoryChanged(categoryId) {
            if (categoryId) {
                this.filters.category_id = categoryId
                this.filterProducts(this.filters)
            }
        },
        productFilter(data) {
            if (data.property_id) {
                this.filters = this.filters.filter(el => el.property_id !== data.property_id);
                this.filters.push(data);
            }
        },

        productFilters(data) {

            const filters = this.parseFilterValues(data.filters);
            filters.category_id = this.filters?.category_id;
            this.filters = filters
            this.filterProducts(this.filters)
        },

    },
    productSearch(data) {
        data => {
            this.searchProducts(data.keyword);
        };
    },
    searchProducts(data) {
        this.productFilter(data);
    },
    parseFilterValues(filters) {
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
    },

    //products
    async fetchProducts(url, data = {}) {
        const fetchProductsResponse = await axios.get(url, data
        ).then(res => {
            this.products = res.data;
            console.log('res.data:', res.data);
        })
    },


    createNewProduct(product) {
        let data = {
            title: product.title,
            description: product.description,
            img: product.img,
            category: product.category,
            property: product.property,
            price: product.price,
            priceOld: product.priceOld,
        };
        ProductDataService.create(data)
            .then((response: ResponseData) => {
                this.product.id = response.data.id;
                console.log('response.data:', response.data);
            }).catch((e: Error) => {
                console.log(e);
            });
        //this.items.push(Item);
    },

    async updateProduct(id: string, payload: Product) {
        if (!id || !payload) return;

        const index = this.findIndexProductsById(id);

        if (index !== -1) {
            //this.items[index] = generateFakeData();
            const updateProductsResponse = await axios.put(url, data
            ).then(res => {
                this.products = res.data;
                console.log('res.data:', res.data);
            })
        }
    },

    async deleteProduct(id: string) {
        const index = this.findIndexProductsById(id);

        if (index === -1) return;
        const deleteProductsResponse = await axios.delete(url, data
        ).then(res => {
            this.products = res.data;
            console.log('res.data:', res.data);
            this.products.splice(index, 1);
        })

    },

    findIndexProductsById(id: string) {
        return this.products.findIndex((product) => product.id === id);
    },
    //
    async fetchFilters(url, data) {
        const fetchFiltersResponse = await axios.get(url, data).then(res => {
            this.filters = res.data;
            console.log('res.data:', res.data);
        })
    },
    resetFilters() {
        this.products.splice(index, 1);
    },
    /*  createNewProduct(product: Product) {
          if (!product) return;

          this.products.push(Product);
      },

      updateProduct(id: string, payload: Product) {
          if (!id || !payload) return;

          const index = this.findIndexById(id);

          if (index !== -1) {
              this.products[index] = generateFakeData();
          }
      },

      deleteProduct(id: string) {
          const index = this.findIndexById(id);

          if (index === -1) return;

          this.products.splice(index, 1);
      },
*/
    findItemIndexById(id: string) {
        return this.items.findIndex((item) => item.id === id);
    },
    findProductIndexById(id: string) {
        return this.products.findIndex((product) => product.id === id);
    },
    sendCat() {
        const catFilt = { title: "Все рубрики" };
        catFilt["catArr"] = [];
        this.items.forEach((catElem) => {
            catFilt.catArr.push({ cat: catElem.property });
        });
        catFilt["all"] = catFilt.catArr.length;
        return catFilt;
    },
    filterCategory(status) {
        console.log('status', status);
        this.actualItems = [];
        this.items.forEach((el) => {
            let isFilt = true;
            el.properties.forEach((elProp) => {
                if (status.includes(elProp.property) && isFilt) {
                    this.actualItems.push(el);
                    isFilt = false;
                }
            });
        });
        !this.actualItems.length && !status.length ? (this.actualItems = this.items) : "";
    },
},
});
