<template>
  <footer class="footer">
    <a href="https://github.com/knstch?tab=repositories">Link to my GitHub</a>
    <p>@knst_ch</p>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: #9772fb;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  a {
    color: #f2f2f2;
    text-decoration: none;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
