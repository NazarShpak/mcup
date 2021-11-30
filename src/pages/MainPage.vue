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

    <!-- DELIVERY -->
    <delivery-part/>

    <!-- FOOTER -->
    <footer-part/>

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
import DeliveryPart from "../components/delivery/DeliveryPart"
import FooterPart from "../components/footer/FooterPart";

export default {
  name: "MainPage",
  components: {
    HeaderPart,
    PlusPart,
    ClientsPart,
    PricePart,
    ReagentsPart,
    QuestionsAnswersPart,
    ReviewsPart,
    DeliveryPart,
    FooterPart
  }
}
</script>

<style>
</style>