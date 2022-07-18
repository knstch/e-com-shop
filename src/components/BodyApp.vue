<template>
  <main>
    <div class="product-cards" :class="{ fewProducts: isFewProducts }">
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
            class="add-favorite"
            @click="addToFav(product._id)"
          >
            Add to favorite
          </button>
          <button
            v-if="favProds.includes(product._id) == true"
            class="add-favorite"
            @click="removeFav(product._id)"
          >
            Remove favorite
          </button>
        </div>
      </div>
    </div>
    <CartBuy v-if="showModal == false" @click="displayModal()"></CartBuy>
    <BuyModal
      v-else-if="showModal == true"
      v-on:closeModal="closeModal"
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
  async mounted() {
    const getProducts = await axios.get("http://localhost:3000/api/shop-items");
    this.productsContainer = getProducts.data;
    if (localStorage.getItem("cartItems")) {
      this.cart = JSON.parse(localStorage.getItem("cartItems") as string);
    }
    if (localStorage.getItem("favItems")) {
      this.favProds = JSON.parse(localStorage.getItem("favItems") as string);
    }
    if (this.cart.length < 3) this.isFewProducts = true;
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

<style scoped lang="scss">
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
      height: 60%;
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

      .add-favorite {
        cursor: pointer;
        background-color: #f32424;
        color: #f2f2f2;
        padding: 12px;
        border: 0;
        border-radius: 5px;
        transition: background-color 0.2s;
      }

      .add-favorite:hover {
        background-color: #f2f2f2;
        color: #f32424;
        outline: 1px solid #f32424;
        outline-offset: -1px;
      }

      .add-cart {
        cursor: pointer;
        background-color: #764af1;
        color: #f2f2f2;
        padding: 12px;
        border: 0;
        border-radius: 5px;
        transition: background-color 0.2s;
      }

      .add-cart:hover {
        background-color: #f2f2f2;
        color: #9772fb;
        outline: 1px solid #9772fb;
        outline-offset: -1px;
      }
    }
  }
}
.fewProducts {
  justify-content: space-around;
}
</style>
