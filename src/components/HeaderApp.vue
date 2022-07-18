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
        <div class="dropdown-menu">
          About me
          <ul class="dropdown">
            <li>Info</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <input type="text" placeholder="Find your item" id="search" />
    </div>
  </header>
</template>
<script lang="ts">
export default { name: "HeaderApp" };
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
      a {
        font-family: "Abril Fatface", cursive;
        font-weight: 800;
        font-size: 42px;
        color: #f2f2f2;
        text-decoration: none;
      }
    }
    //Styles for menu elements
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

    #search {
      height: 35px;
      line-height: 35px;
      outline: none;
      padding: 5px;
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
