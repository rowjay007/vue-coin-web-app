<template>
  <div id="nav">
    <div class="coin">
      <router-link to="/">Home</router-link> |
      <router-link to="/coin:symbol">Coin Archive</router-link>
      |
      <router-link to="/coin">Coins</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100;1,400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #1a1a1c;
  color: #fff;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  color: #fff;
}
.coin {
  justify-content: space-between;
}
</style>
