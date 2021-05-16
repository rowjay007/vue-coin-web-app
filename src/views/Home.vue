<template>
  <div class="home">
    <!-- <Coin msg="Welcome to our coin app"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Coin from "@/views/Coin/Coin.vue";
import Coins from "@/views/Coin/Coins.vue";

export default {
  name: "Home",
  components: {
    Coin,
    Coins,
  },
};
</script>
