<template>
  <div class="main-page">

    <!-- HEADER -->
    <header-part/>

    <!-- PLUS -->
    <plus-part/>

    <!-- CLIENTS -->
    <clients-part/>

  </div>
</template>

<script>
import HeaderPart from "../components/header/HeaderPart";
import PlusPart from "../components/plus/PlusPart";
import ClientsPart from "../components/clients/ClientsPart";

export default {
  name: "MainPage",
  components: {
    HeaderPart,
    PlusPart,
    ClientsPart
  }
}
</script>

<style lang="scss" scoped>
</style>