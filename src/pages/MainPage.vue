<template>
  <div class="main-page">

    <!-- HEADER -->
    <header-part/>

    <!-- PLUS -->
    <plus-part/>

  </div>
</template>

<script>
import HeaderPart from "../components/header/HeaderPart";
import PlusPart from "../components/plus/PlusPart";

export default {
  name: "MainPage",
  components: {
    HeaderPart,
    PlusPart
  }
}
</script>

<style lang="scss" scoped>
</style>