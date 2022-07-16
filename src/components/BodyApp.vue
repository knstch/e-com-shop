<template>
  <main>
    <div class="product-cards">
      <div class="card">
        <img
          src="https://71.img.avito.st/image/1/1.3hrdJra6cvPrj7D27TWWBjqFdPdpBXoxbIV2-2mNcA.g6DVq3_h4xIArCMhgz0KZi2LAxeq9urraZeo6uucwKg"
          alt=""
        />
        <div class="info-card">
          <h2>Test</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            eveniet?
          </p>
          <h3 class="price">2300 THB</h3>
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
export default defineComponent({
  name: "BodyApp",
  components: {
    CartBuy,
    BuyModal,
  },
  data() {
    return {
      showModal: false,
      aboba: 2,
    };
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
  justify-content: space-between;
  gap: 30px;

  //Styles for cards, catalog elements
  .card {
    background-color: #f2f2f2;
    width: 28%;
    padding: 10px;
    border-radius: 10px;

    img {
      max-width: 100%;
      border-radius: 5px;
    }

    .info-card {
      padding: 10px;

      h2 {
        text-align: center;
      }

      .price {
        text-align: center;
        margin: 5px 0;
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
