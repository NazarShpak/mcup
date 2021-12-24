<template>
  <div class="main-page">

    <!-- PLUS -->
    <plus-part
        class="plus-part"
        @openOrderForm="openOrderForm"
    />

    <!-- CLIENTS -->
    <clients-part
        class="clients-part"
    />

    <!-- PRICE -->
    <price-part
        class="price-part"
        @openOrderForm="openOrderForm"
    />

    <!-- REAGENTS -->
    <reagents-part
        class="reagents-part"
    />

    <!-- QUESTIONS - ANSWERS -->
    <questions-answers-part
        class="questions-answers-part"
    />

    <!-- REVIEWS -->
    <reviews-part
        class="reviews-part"
    />

    <!-- DELIVERY -->
    <delivery-part
        class="delivery-part"
        @openOrderForm="openOrderForm"
    />

  </div>
</template>

<script>
import PlusPart from "../components/main-page/plus/PlusPart";
import ClientsPart from "../components/main-page/clients/ClientsPart";
import PricePart from "../components/main-page/price/PricePart";
import ReagentsPart from "../components/main-page/reagents/ReagentsPart";
import QuestionsAnswersPart from "../components/main-page/questions-answers/QuestionsAnswersPart";
import ReviewsPart from "../components/main-page/reviews/ReviewsPart";
import DeliveryPart from "../components/main-page/delivery/DeliveryPart"

export default {
  name: "MainPage",
  components: {
    PlusPart,
    ClientsPart,
    PricePart,
    ReagentsPart,
    QuestionsAnswersPart,
    ReviewsPart,
    DeliveryPart
  },
  methods: {
    openOrderForm(value) {
        this.$emit('openOrderForm', value)
    }
  }
}
</script>

<style>
</style>