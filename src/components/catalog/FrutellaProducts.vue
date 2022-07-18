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
import axios from "axios";

declare interface Product {
  _id: string;
  img: string;
  name: string;
  desc: string;
  price: number;
}

declare interface Cart {
  _id: string;
  quanity: number;
  leftItems?: any;
}

export default defineComponent({
  name: "FrutellaProducts",
  data() {
    return {
      showModal: false as boolean,
      productsContainer: [] as Product[],
      cart: [] as Cart[],
      favProds: [] as string[],
    };
  },
  async mounted() {
    const getProducts = await axios.get(
      "http://localhost:3000/api/shop-items/frutella"
    );
    this.productsContainer = getProducts.data;
    if (localStorage.getItem("cartItems")) {
      this.cart = JSON.parse(localStorage.getItem("cartItems") as string);
    }
    if (localStorage.getItem("favItems")) {
      this.favProds = JSON.parse(localStorage.getItem("favItems") as string);
    }
  },
  methods: {
    displayModal(): boolean {
      return (this.showModal = true);
    },
    closeModal(): boolean {
      return (this.showModal = false);
    },
    addToCart(productId: string) {
      this.cart = JSON.parse(localStorage.getItem("cartItems") as string);
      let cartItem;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i]._id == productId) {
          cartItem = this.cart[i];
        }
      }

      if (cartItem) {
        cartItem.quanity++;
      } else if (!cartItem) {
        this.cart.unshift({ _id: productId, quanity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    },
    addToFav(productId: string) {
      let checkFavProduct = this.favProds.includes(productId);
      if (checkFavProduct == false) {
        this.favProds.unshift(productId);
        localStorage.setItem("favItems", JSON.stringify(this.favProds));
        console.log(this.favProds);
      }
    },
    removeFav(productId: string) {
      this.favProds = this.favProds.filter((product) => product != productId);
      localStorage.setItem("favItems", JSON.stringify(this.favProds));
    },
  },
});
</script>
