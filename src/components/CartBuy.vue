<template>
  <div class="cart">
    <img
      class="cart-img"
      src="https://www.svgrepo.com/show/22457/cart.svg"
      alt="cart"
    />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  position: fixed;
  bottom: 50px;
  right: 100px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border: 2px solid #f32424;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  .cart-img {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 14px;
    right: 16px;
  }
}
</style>
