<template>
  <div class="main-page">

    <!-- HEADER -->
    <header-part/>

    <!-- PLUS -->
    <plus-part/>

    <!-- CLIENTS -->
    <clients-part/>

    <!-- PRICE -->
    <price-part/>

  </div>
</template>

<script>
import HeaderPart from "../components/header/HeaderPart";
import PlusPart from "../components/plus/PlusPart";
import ClientsPart from "../components/clients/ClientsPart";
import PricePart from "../components/price/PricePart";

export default {
  name: "MainPage",
  components: {
    HeaderPart,
    PlusPart,
    ClientsPart,
    PricePart
  }
}
</script>

<style lang="scss" scoped>
</style>