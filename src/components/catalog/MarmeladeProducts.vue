<template>
  <div
    class="product-cards"
    :class="{ fewProducts: productsContainer.length < 3 }"
  >
    <div
      class="card"
      v-for="product in productsContainer"
      :_id="product._id"
      :class="{ favorite: favProds.includes(product._id) }"
      :key="product._id"
    >
      <div class="img-container">
        <img :src="product.img" :alt="product.desc" />
      </div>
      <div class="info-card">
        <h2>{{ product.name }}</h2>
        <p>
          {{ product.desc }}
        </p>
        <h3 class="price">{{ product.price }} THB</h3>
      </div>
      <div class="button-actions">
        <button class="add-cart" @click="addToCart(product._id)">
          Add to cart
        </button>
        <button
          v-if="favProds.includes(product._id) == false"
          class="favorite"
          @click="addToFav(product._id)"
        >
          Add to favorite
        </button>
        <button
          v-if="favProds.includes(product._id) == true"
          class="favorite remove"
          @click="removeFav(product._id)"
        >
          Remove favorite
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarmeladeProducts",
  data() {
    return {
      catalogListProducts: "marmelade" as string,
    };
  },
  props: ["favProds", "cart", "productsContainer"],
  async mounted() {
    this.createCatalog(this.catalogListProducts);
  },
  methods: {
    createCatalog(catalog: string) {
      this.$emit("createCatalog", catalog);
    },
    addToCart(productId: string) {
      this.$emit("addToCart", productId);
    },
    addToFav(productId: string) {
      this.$emit("addToFav", productId);
    },
    removeFav(productId: string) {
      this.$emit("removeFav", productId);
    },
  },
});
</script>
