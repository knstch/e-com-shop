<template>
  <main>
    <router-view
      :favProds="favProds"
      :productsContainer="productsContainer"
      :cart="cart"
      v-on:createCatalog="createCatalog"
      v-on:addToCart="addToCart"
      v-on:addToFav="addToFav"
      v-on:removeFav="removeFav"
    ></router-view>
    <CartBuy v-if="showModal == false" @click="displayModal(true)"></CartBuy>
    <BuyModal
      v-else-if="showModal == true"
      v-on:displayModal="displayModal"
    ></BuyModal>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartBuy from "../components/CartBuy.vue";
import BuyModal from "./BuyModal.vue";
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
  name: "BodyApp",
  components: {
    CartBuy,
    BuyModal,
  },
  data() {
    return {
      showModal: false as boolean,
      productsContainer: [] as Product[],
      cart: [] as Cart[],
      favProds: [] as string[],
      isFewProducts: false as boolean,
    };
  },
  mounted() {
    this.createCatalog();
    this.loadStorage();
  },
  methods: {
    //Load data from DB to array to render products in catalog
    async createCatalog(catalog?: string) {
      if (!catalog) {
        const getProducts = await axios.get(`/api/shop-items/`);
        this.productsContainer = getProducts.data;
      } else {
        const getProducts = await axios.get(`/api/shop-items/${catalog}`);
        this.productsContainer = getProducts.data;
      }
    },
    //Load cart and favorite products from local storage
    //Also, change catalog style if there're less then 3 items
    loadStorage() {
      if (localStorage.getItem("cartItems")) {
        this.cart = JSON.parse(localStorage.getItem("cartItems") as string);
      }
      if (localStorage.getItem("favItems")) {
        this.favProds = JSON.parse(localStorage.getItem("favItems") as string);
      }
      if (this.cart.length < 3) this.isFewProducts = true;
    },
    //Open / close modal cart window
    displayModal(condition: boolean): boolean {
      return (this.showModal = condition);
    },
    //Adds products to the cart
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
    //Add products to favorite list
    addToFav(productId: string) {
      let checkFavProduct = this.favProds.includes(productId);
      if (checkFavProduct == false) {
        this.favProds.unshift(productId);
        localStorage.setItem("favItems", JSON.stringify(this.favProds));
      }
    },
    //Remove products from favorite list
    removeFav(productId: string) {
      this.favProds = this.favProds.filter((product) => product != productId);
      localStorage.setItem("favItems", JSON.stringify(this.favProds));
    },
  },
});
</script>

<style lang="scss">
main {
  display: flex;
}
.product-cards {
  width: 80%;
  margin: 60px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  .favorite {
    background-color: #f3242495 !important;
    color: #f2f2f2;
  }
  //Styles for cards, catalog elements
  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f2f2f2;
    width: 320px;
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.4s;
    .img-container {
      height: 350px;
      overflow: hidden;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        border-radius: inherit;
      }
    }

    .info-card {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      h2 {
        text-align: center;
      }
      .price {
        text-align: center;
      }
    }
    .button-actions {
      display: flex;
      flex-direction: row;
      gap: 10px;
      .favorite {
        cursor: pointer;
        background-color: #f32424 !important;
        color: #f2f2f2;
        padding: 12px;
        border: 0;
        border-radius: 5px;
        transition: background-color 0.2s;
        transition: outline 0.2s;
        transition: color 0.2s;
        &:hover {
          background-color: #f2f2f2 !important;
          color: #f32424;
          outline: 1px solid #f32424;
          outline-offset: -1px;
        }
      }
      .remove {
        background-color: #f2f2f2 !important;
        color: #f32424 !important;
        &:hover {
          background-color: #f32424 !important;
          color: #f2f2f2 !important;
        }
      }
      .add-cart {
        cursor: pointer;
        background-color: #764af1;
        color: #f2f2f2;
        padding: 12px;
        border: 0;
        border-radius: 5px;
        transition: background-color 0.2s;
        &:hover {
          background-color: #f2f2f2;
          color: #9772fb;
          outline: 1px solid #9772fb;
          outline-offset: -1px;
        }
      }
    }
  }
}
.fewProducts {
  justify-content: space-around;
}
</style>
