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
    <div class="cart">
      <img
        class="cart-img"
        src="https://www.svgrepo.com/show/22457/cart.svg"
        alt="cart"
      />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
//Styles for catalog
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
  .cart-img {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 14px;
    right: 16px;
  }
}
.cart:hover {
  transform: scale(1.1);
}
</style>
