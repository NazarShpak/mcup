<template>
  <div class="main-page">

    <div
        class="order-form__block"
        v-if="formOpen"
    >
      <order-form
          class="order-form"
          :quantityValue="quantity"
          @closeOrderForm="formOpen = false"
      />
    </div>


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
import OrderForm from "../components/main-page/form/OrderForm";
import HeaderPart from "../components/header/HeaderPart";
import PlusPart from "../components/main-page/plus/PlusPart";
import ClientsPart from "../components/main-page/clients/ClientsPart";
import PricePart from "../components/main-page/price/PricePart";
import ReagentsPart from "../components/main-page/reagents/ReagentsPart";
import QuestionsAnswersPart from "../components/main-page/questions-answers/QuestionsAnswersPart";
import ReviewsPart from "../components/main-page/reviews/ReviewsPart";
import DeliveryPart from "../components/main-page/delivery/DeliveryPart"
import FooterPart from "../components/general/footer/FooterPart";

export default {
  name: "MainPage",
  data() {
    return {
      formOpen: true,
      quantity: '100'
    }
  },
  components: {
    OrderForm,
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
.main-page {
  position: relative;
}

.order-form__block {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(200, 200, 200, 0.35) 0%, rgba(200, 200, 200, 0) 100%);
}

.order-form {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%);
  z-index: 20;
}
</style>