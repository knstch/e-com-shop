<template>
  <header class="header">
    <div class="main-section">
      <div id="logo"><a href="/">knstch</a></div>
      <div class="menu">
        <div class="dropdown-menu">
          <a class="link" href="#/marmelade">My favorite marmalade</a>
          <ul class="dropdown">
            <a class="link" href="#/chupachups"><li>Chupa chups</li></a>
            <a class="link" href="#/haribo"><li>Haribo</li></a>
            <a class="link" href="#/frutella"><li>Frutella</li></a>
          </ul>
        </div>
        <div class="dropdown-menu">
          <a class="link" href="#/pizza">Lovely pizza</a>
          <ul class="dropdown">
            <a class="link" href="#/pepperoni"><li>Pepperony</li></a>
            <a class="link" href="#/spicypizza"><li>Spicy pizza</li></a>
          </ul>
        </div>
      </div>
      <div class="search-filed">
        <input
          type="text"
          placeholder="Find your item"
          id="search"
          v-model="searchInput"
          @keyup="findProduct()"
        />
        <div v-if="isSearchActive == true" class="search-products">
          <div
            v-for="product in productSearchContainer"
            class="found-product"
            :key="product._id"
          >
            <div class="found-product-info">
              <div class="found-product-img-container">
                <img class="found-product-img" :src="product.img" alt="" />
              </div>
              <p class="found-product-name">{{ product.name }}</p>
            </div>
            <button
              class="found-product-button"
              @click="addToCart(product._id)"
            >
              <img class="button-svg" src="../assets/cart.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

declare interface ProductSearch {
  _id: string;
  img: string;
  name: string;
}

declare interface Cart {
  _id: string;
  quanity: number;
  leftItems?: any;
}

export default defineComponent({
  name: "HeaderApp",
  data() {
    return {
      searchInput: "" as string,
      isSearchActive: false as boolean,
      productSearchContainer: [] as ProductSearch[],
      cart: [] as Cart[],
    };
  },
  methods: {
    async findProduct() {
      if (this.searchInput != "") {
        const getSearchProducts = await axios.get(
          `http://localhost:3000/api/shop-items/find-all/${this.searchInput}`
        );
        this.productSearchContainer = getSearchProducts.data;
        if (getSearchProducts.data.length > 0) this.isSearchActive = true;
        else this.isSearchActive = false;
      } else {
        this.isSearchActive = false;
      }
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
  },
});
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Albert+Sans:wght@200;400;600;800&display=swap");
//Styles for header
.link {
  color: #f2f2f2;
  text-decoration: none;
}
.header {
  width: 100%;
  background-color: #9772fb;
  height: 100px;
  display: flex;
  align-items: center;

  .main-section {
    width: 80%;
    margin: 0 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    #logo {
      width: 250px;
      a {
        font-family: "Abril Fatface", cursive;
        font-weight: 800;
        font-size: 42px;
        color: #f2f2f2;
        text-decoration: none;
      }
    }
    //Styles for menu elements
    .menu {
      justify-self: center;
      .dropdown-menu {
        position: relative;
        display: inline-block;
        height: 45px;
        width: 200px;
        line-height: 45px;
        text-align: center;
        cursor: pointer;
        color: #f2f2f2;
        background-color: #764af1;
        a {
          color: #f2f2f2;
        }
        ul {
          list-style: none;
          font-size: 14px;
        }

        li {
          display: none;
          opacity: 0;
          background-color: #f2f2f2;
          color: #764af1;
          transition: color 0.3s;
        }

        li:hover {
          color: #f2f2f2;
          background: #9772fb;
        }

        .dropdown {
          position: absolute;
          width: 200px;
          color: #f2f2f2;
        }
      }

      .dropdown-menu:hover .dropdown li {
        display: block;
        animation: fallingMenu 0.5s forwards;
      }
    }
    .search-filed {
      display: flex;
      flex-direction: column;
      justify-self: flex-end;
      position: relative;
      width: 250px;
      #search {
        height: 35px;
        line-height: 35px;
        outline: none;
        border: none;
        padding: 5px;
      }
      .search-products {
        position: absolute;
        top: 45px;
        width: inherit;
        height: auto;
        max-height: 300px;
        overflow-y: auto;
        background-color: #fff;
        outline: 2px solid #764af1;
        outline-offset: -1px;
        border: none;
        z-index: 1;
        .found-product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 45px;
          width: inherit - 8px;
          padding: 8px;
          .found-product-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .found-product-img-container {
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              border-radius: 5px;
              .found-product-img {
                width: 45px;
                height: 45px;
              }
            }
          }
          .found-product-button {
            height: 35px;
            width: 35px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #dbdada;
            border-radius: 5px;
            background-color: #fff;
            transition: background-color 0.2s;
            .button-svg {
              height: 25px;
              width: 25px;
            }
          }
          .found-product-button:hover {
            background-color: #dbdada;
          }
        }
      }
    }
  }
}
//Animation for dropdown menu
@keyframes fallingMenu {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
