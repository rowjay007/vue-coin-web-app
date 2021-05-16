<template>
  <div class="coin-container" v-for="coin in coins" :key="coin.symbol">
    <div class="coin-row">
      <div class="coin">
        <p class="coin-symbol">{{ coin.symbol }}</p>
        <h1>{{ coin.priceChange }}</h1>
        <h1>{{ coin.prevClosePrice }}</h1>
      </div>
      <div class="coin-data">
        <p class="coin-price">${{ coin.priceChange }}</p>
        <p class="coin-volume">{{ coin.volume }}</p>
        <p>{{ coin.priceChangePercent }}</p>
        <p class="coin-markcap">{{ coin.quoteVolume }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      coins: [],
    };
  },
  mounted() {
    //  axios
    //     .get("https://api.binance.com/api/v3/ticker/24hr")
    //     .then(res => {
    //       this.coins = res.data;
    //       console.log(this.coins)
    //     })
    //     .catch(error => {
    //       console.log(error)
    fetch("https://api.binance.com/api/v3/ticker/24hr")
      .then((res) => res.json())
      .then((data) => (this.coins = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>.coin-container {
  display: flex;
  justify-content: center;
}

.coin-row {
  display: flex;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
}

.coin {
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
}

.coin h1 {
  font-size: 16px;
  width: 150px;
}
.coin img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.coin-symbol {
  text-transform: uppercase;
}

.coin-data {
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
}

.coin-price {
  width: 110px;
}
.coin-volume {
  width: 230px;
}
.coin-marketcap {
  width: 240px;
}
.coin-percent {
  width: 80%;
}
.red {
  color: rgb(39, 12, 12);
}
.green {
  color: green;
}
</style>
