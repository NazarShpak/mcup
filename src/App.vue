<template>
  <div id="app">

    <!-- ORDER FORM -->
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
    <header-part
        class="header-part"
        ref="headerPart"
    />

    <!-- MAIN PART -->
    <router-view
        :key="$route.path"
        @openOrderForm="openOrderForm"
    />

    <!-- FOOTER -->
    <footer-part
        class="footer-part"
    />


  </div>
</template>

<script>
import HeaderPart from "./components/general/header/HeaderPart";
import FooterPart from "./components/general/footer/FooterPart";
import OrderForm from "./components/main-page/form/OrderForm";

export default {
  name: 'App',
  data() {
    return {
      formOpen: false,
      quantity: ''
    }
  },
  components: {
    OrderForm,
    HeaderPart,
    FooterPart
  },
  methods: {
    openOrderForm(value) {
      this.quantity = value
      this.formOpen = true
      this.scrollIntoHeaderPart()
    },
    scrollIntoHeaderPart() {
      this.$refs.headerPart.$el.scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style>
#app {
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
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  z-index: 20;
}
</style>
