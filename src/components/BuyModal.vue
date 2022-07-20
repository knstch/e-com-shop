<template>
  <div class="cart-modal-wrapped" @click="displayModal(false)">
    <div class="show-cart" @click.stop="">
      <h2>Your cart:</h2>
      <span class="close-modal" @click="displayModal(false)">&#215;</span>
      <div class="cart-container" v-if="modalCart.length > 0">
        <div
          v-for="productCart in modalCart"
          :_id="productCart._id"
          :key="productCart._id"
          class="cart-item"
        >
          <div class="cart-item-left">
            <div class="img-container">
              <img :src="productCart.img" alt="cartProduct" />
            </div>
            <p>{{ productCart.name }}</p>
          </div>
          <div class="cart-item-right">
            <div class="count-items-cart">
              <span
                class="change-number-btn"
                @click="addProduct(productCart._id)"
                >&#43;</span
              >
              <p>{{ productCart.quanity }}</p>
              <span
                class="change-number-btn"
                @click="removeProduct(productCart._id)"
                >&#8722;</span
              >
            </div>
            <p>{{ productCart.price }}</p>
          </div>
        </div>
      </div>
      <div class="cart-empty" v-else>The cart is empty ;(</div>
      <p class="count-cost" v-if="modalCart.length > 0">
        Total: {{ totalCost }} THB
      </p>
      <button class="buy-cart-btn" v-if="modalCart.length > 0">
        Go to checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      modalCart: [] as any, //Array for products in cart
      totalCost: 0 as number, //Total cost of items in cart
    };
  },
  async mounted() {
    //Sets the cart, when we load the page
    await this.setCart();
  },
  methods: {
    //Read BodyApp
    displayModal(condition: boolean) {
      this.$emit("displayModal", condition);
    },
    //Setting cart if any items were in local storage
    //Also, loads data from DB and create a new cart array
    async setCart() {
      if (localStorage.getItem("cartItems")) {
        this.modalCart = JSON.parse(
          localStorage.getItem("cartItems") as string
        ) as any;
      }
      for (let i = 0; i < this.modalCart.length; i++) {
        let getProductInCart = await axios.get(
          `http://localhost:3000/api/shop-items/${this.modalCart[i]._id}`
        );
        this.modalCart[i].img = getProductInCart.data[0].img;
        this.modalCart[i].name = getProductInCart.data[0].name;
        this.modalCart[i].price = getProductInCart.data[0].price;
        this.modalCart[i].leftItems = getProductInCart.data[0].leftItems;
        this.countTotalCost(
          this.modalCart[i].price * this.modalCart[i].quanity
        );
        if (this.modalCart[i].quanity > this.modalCart[i].leftItems) {
          this.modalCart[i].quanity = this.modalCart[i].leftItems;
        }
      }
    },
    //Calculates total cost of items in cart
    countTotalCost(cost: number): number {
      return (this.totalCost += cost);
    },
    //Adds products in cart, if quanity of items less then left
    addProduct(id: string) {
      for (let i = 0; i < this.modalCart.length; i++) {
        if (this.modalCart[i]._id == id) {
          if (this.modalCart[i].quanity < this.modalCart[i].leftItems) {
            this.modalCart[i].quanity++;
            this.totalCost += this.modalCart[i].price;
            localStorage.setItem("cartItems", JSON.stringify(this.modalCart));
            break;
          } else {
            console.log("No more items");
          }
        }
      }
    },
    //Removes products, if quanity = 0, removes item from the cart
    removeProduct(id: string) {
      for (let i = 0; i < this.modalCart.length; i++) {
        if (this.modalCart[i]._id == id) {
          this.modalCart[i].quanity--;
          this.totalCost -= this.modalCart[i].price;
          if (this.modalCart[i].quanity < 1) {
            this.modalCart.splice(i, 1);
            localStorage.setItem("cartItems", JSON.stringify(this.modalCart));
          }
          localStorage.setItem("cartItems", JSON.stringify(this.modalCart));
          break;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.cart-modal-wrapped {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 102, 102, 0.5);
  .show-cart {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    max-height: 400px;
    background: #ddd;
    width: 320px;
    background-color: #f2f2f2;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    .count-cost {
      display: flex;
      justify-content: end;
    }
    .close-modal {
      cursor: pointer;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 2px solid #f2f2f2;
      border-radius: 100%;
      font-size: 30px;
      right: 20px;
      top: 15px;
      transition: color 0.2s;
      transition: border 0.2s;
      &:hover {
        border: 2px solid #f32424;
        border-radius: 100%;
        color: #f32424;
      }
    }
    .cart-empty {
      font-size: 24px;
      font-weight: 900;
      text-align: center;
    }
    .cart-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: auto;
      .cart-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        .cart-item-left {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          width: 55%;
          p {
            word-wrap: break-word;
          }
          .img-container {
            width: 70px;
            min-width: 70px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 5px;
            img {
              max-width: 100%;
              max-height: 100%;
              border-radius: inherit;
            }
          }
        }
        .cart-item-right {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 40%;
          .count-items-cart {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            .change-number-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              width: 15px;
              height: 15px;
              border-radius: 100%;
              background-color: #764af1;
              color: #f2f2f2;
              padding: 3px;
              user-select: none;
              transition: background-color 0.2s;
              &:hover {
                background-color: #f2f2f2;
                color: #764af1;
                outline: 1px solid #764af1;
                outline-offset: -1px;
              }
            }
          }
        }
      }
    }
    .count-cost {
      font-weight: 800;
      font-size: 22px;
    }
    .buy-cart-btn {
      cursor: pointer;
      background-color: #764af1;
      color: #f2f2f2;
      padding: 12px;
      border: 0;
      border-radius: 5px;
      transition: background-color 0.2s;
    }

    .buy-cart-btn:hover {
      background-color: #f2f2f2;
      color: #9772fb;
      outline: 1px solid #9772fb;
      outline-offset: -1px;
    }
  }
}
</style>
