<template>
  <div class="cart-modal-wrapped" @click="closeModal()">
    <div class="show-cart" @click.stop="">
      <h2>Your cart:</h2>
      <span class="close-modal" @click="closeModal()">&#215;</span>
      <div class="cart-item">
        <img
          src="https://71.img.avito.st/image/1/1.3hrdJra6cvPrj7D27TWWBjqFdPdpBXoxbIV2-2mNcA.g6DVq3_h4xIArCMhgz0KZi2LAxeq9urraZeo6uucwKg"
          alt="product"
        />
        <p>Test</p>
        <div class="count-items-cart">
          <span class="change-number-btn">&#8722;</span>
          <p>3</p>
          <span class="change-number-btn">&#43;</span>
        </div>
        <p>3000 THB</p>
      </div>
      <button class="buy-cart-btn">Buy</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
.cart-modal-wrapped {
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
    width: 200px;
    height: auto;
    background: #ddd;
    width: 25%;
    background-color: #f2f2f2;
    padding: 40px;
    border-radius: 10px;
    position: relative;
    h2 {
      margin-bottom: 30px;
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
    }
    .close-modal:hover {
      border: 2px solid #f32424;
      border-radius: 100%;
      color: #f32424;
    }
    .cart-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      img {
        width: 80px;
        border-radius: 5px;
      }
      .count-items-cart {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
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
          transition: background-color 0.2s;
        }
        .change-number-btn:hover {
          background-color: #f2f2f2;
          color: #764af1;
          outline: 1px solid #764af1;
          outline-offset: -1px;
        }
      }
    }

    .buy-cart-btn {
      cursor: pointer;
      margin-top: 30px;
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
