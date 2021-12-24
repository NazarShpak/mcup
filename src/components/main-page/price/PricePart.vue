<template>
  <div class="price-part">
    <div class="container">

      <h2 class="price-part__title">
        Ціна
      </h2>

      <div class="price-part__cards">

        <price-card
            class="price-part__card"
            v-for="(info, index) of infos"
            :key="index"
            :info="info"
            :active="indexOfActiveCard === index"
            @changeCard="changeCard(index)"
        />

      </div>

      <p class="price-part__info">
        *ВІДПРАВИМО ДЕНЬ В ДЕНЬ ПРИ ПІДТВЕРДЖЕННІ ЗАМОВЛЕННЯ ДО 14:00
      </p>

    </div>
  </div>
</template>

<script>
import PriceCard from "./PriceCard";

export default {
  name: "PricePart",
  data() {
    return {
      indexOfActiveCard: 2,
      infos: [
        {
          title: '1шт.',
          subtitle: '1 тест в упаковці',
          price: '123',
          quantity: '1'
        },
        {
          title: 'від 100 шт.',
          subtitle: '1 тест в упаковці',
          price: '110',
          quantity: '100'
        },
        {
          title: 'від 1000 шт.',
          subtitle: '1 тест в упаковці',
          price: '85',
          quantity: '1000'
        }
      ]
    }
  },
  components: {
    PriceCard
  },
  methods: {
    changeCard(value) {
      this.indexOfActiveCard = value
      this.$emit('openOrderForm', this.infos[this.indexOfActiveCard].quantity)
    }
  }
}
</script>

<style lang="scss" scoped>
.price-part {
  margin-bottom: 204px;

  &__title {
    font-weight: 500;
    font-size: 46px;
    line-height: 61px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #252B42;
    margin-bottom: 80px;
  }

  &__cards {
    width: 1105px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 16px;
  }

  &__info {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #252B42;
    margin-left: 111px;
  }
}

@media (max-width: 428px) {
  .price-part {
    margin-bottom: 100px;

    &__title {
      font-size: 26px;
      margin-bottom: 20px;
    }

    &__cards {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto 8px;
    }

    &__card + &__card {
      margin-top: 20px;
    }

    &__info {
      font-size: 9px;
      line-height: 16px;
      color: #252B42;
      margin-left: 30px;
    }
  }
}

@media (max-width: 390px) {
  .price-part {
    &__info {
      margin-left: 20px;
    }
  }
}
</style>