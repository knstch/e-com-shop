<template>
  <main>
    <div class="product-cards">
      <div
        class="card"
        v-for="product in productsContainer"
        :id="product._id"
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
          <button class="add-cart">Add to cart</button>
          <button class="add-favorite">Add to favorite</button>
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
export default defineComponent({
  name: "BodyApp",
  components: {
    CartBuy,
    BuyModal,
  },
  data() {
    return {
      showModal: false,
      productsContainer: [],
    };
  },
  async mounted() {
    const getProducts = await axios.get("http://localhost:3000/api/shop-items");
    this.productsContainer = getProducts.data;
  },
  methods: {
    displayModal(): boolean {
      return (this.showModal = true);
    },
    closeModal(): boolean {
      return (this.showModal = false);
    },
  },
});
</script>

<style scoped lang="scss">
//Styles for catalog
main {
  display: flex;
}
.product-cards {
  width: 80%;
  margin: 60px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;

  //Styles for cards, catalog elements
  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f2f2f2;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
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
</style>
