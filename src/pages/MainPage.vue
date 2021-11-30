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

    <!-- REAGENTS -->
    <reagents-part/>

    <!-- QUESTIONS - ANSWERS -->
    <questions-answers-part/>

    <!-- REVIEWS -->
    <reviews-part/>

  </div>
</template>

<script>
import HeaderPart from "../components/header/HeaderPart";
import PlusPart from "../components/plus/PlusPart";
import ClientsPart from "../components/clients/ClientsPart";
import PricePart from "../components/price/PricePart";
import ReagentsPart from "../components/reagents/ReagentsPart";
import QuestionsAnswersPart from "../components/questions-answers/QuestionsAnswersPart";
import ReviewsPart from "../components/reviews/ReviewsPart";

export default {
  name: "MainPage",
  components: {
    HeaderPart,
    PlusPart,
    ClientsPart,
    PricePart,
    ReagentsPart,
    QuestionsAnswersPart,
    ReviewsPart
  }
}
</script>

<style lang="scss" scoped>
</style>