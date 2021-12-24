<template>
  <div class="footer-part">
    <div class="container">
      <div class="footer-part__blocks">

        <!-- First block -->
        <div class="footer-part__block">

          <ul class="footer-part__menu-list first">

            <li
                class="footer-part__menu-item-first"
                @click="goTo('return-exchange')"
            >
              Повернення та обмін товару
            </li>
            <li
                class="footer-part__menu-item-second"
                @click="goTo('delivery')"
            >
              Правила доставки
            </li>
            <li
                class="footer-part__menu-item-third"
            >
              Політика конфіденційності
            </li>

          </ul>

          <p class="footer-part__info-producer">
            <span class="info-producer-span">Виробник</span> <br>
            HANGZHOU TESTSEA BIOTECHNOLOGY CO., LTD. / ХАНЧЖОУ ТЕСТСИЕ БИОТЕКНОЛОДЖИ КО. ЛТД
          </p>

          <img alt
               class="footer-part__img-liqpay"
               :src='require(`@/assets/icons/liqpay.png`)'
          >

          <div class="footer-part__images">
            <img alt
                 class="footer-part__img"
                 :src='require(`@/assets/icons/master-card.png`)'
            >

            <img alt
                 class="footer-part__img"
                 :src='require(`@/assets/icons/visa.png`)'
            >
          </div>

          <div class="footer-part__other-info">
            Все права защищены © 2018 - 2021 MCUP
          </div>
        </div>

        <!-- Second block -->
        <div class="footer-part__block">

          <ul class="footer-part__menu-list second">

            <li
                class="footer-part__menu-item-first"
                @click="goTo('return-exchange')"
            >
              Політика конфіденційності
            </li>
            <li
                class="footer-part__menu-item-second"
                @click="goTo('delivery')"
            >
              Правила доставки
            </li>
            <li
                class="footer-part__menu-item-third"
            >
              Повернення та обмін товару
            </li>
          </ul>

          <p class="footer-part__info-phone">
            {{ phone }}
          </p>

          <p class="footer-part__info-address">
            {{ address }}
          </p>

          <!-- Google map -->
          <gmap-map
              class="footer-part__map"
              :center="{lng: 30.619124340547895, lat: 50.45605645605169}"
              :zoom="15"
              map-type-id="terrain"
              :options="mapStyle"
          >
            <gmap-custom-marker
                :marker="{lat: 50.45605645605169, lng: 30.619124340547895}"
            >
              <img alt
                   class="footer-part__marker"
                   :src='require(`@/assets/icons/marker-2.png`)'
              />
            </gmap-custom-marker>
          </gmap-map>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker';

export default {
  name: "FooterPart",
  data() {
    return {
      phone: '044 444 44 44',
      address: 'М. Київ, Україна 02420 вул. Попудренка 28',
      mapStyle: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      },
    }
  },
  components: {
    GmapCustomMarker
  },
  methods: {
    goTo(value) {
      this.$router.push({name: [value]})
      this.$emit('goTo', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-part {
  height: 533px;
  background-image: url("../../../assets/images/footer-bg.png");
  background-size: 100% 533px;
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 116px;
  padding-bottom: 22px;
  color: #FEFEFE;
  letter-spacing: 0.2px;

  .container {
    padding: 0 81px;
  }

  .second {
    display: none;
  }

  &__blocks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__block {
    display: flex;
    flex-direction: column;
  }

  &__menu-list {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 23px;
    line-height: 27px;
    width: 545px;
    margin-bottom: 35px;
  }

  &__menu-item-first {
    margin-right: 25px;
  }

  &__menu-item-first,
  &__menu-item-second {
    margin-bottom: 30px;
  }

  &__info-producer {
    font-size: 18px;
    line-height: 24px;
    width: 241px;
    margin-bottom: 30px;

    .info-producer-span {
      font-weight: 500;
      font-size: 21px;
      padding-bottom: 10px;
    }
  }

  &__img-liqpay {
    margin-bottom: 32px;
    width: 153px;
    height: 35px;
  }

  &__images {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__img + &__img {
    margin-left: 30px;
  }

  &__other-info {
    position: absolute;
    bottom: 16px;
    left: 389px;
    width: 240px;
    font-size: 23px;
    line-height: 27px;
    font-weight: 500;
  }

  &__info-phone,
  &__info-address {
    padding-left: 36px;
    background-repeat: no-repeat;
    background-position: left center;
  }

  &__info-phone {
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    letter-spacing: 0.1px;
    margin-bottom: 18px;
    background-size: 20px 32px;
    background-image: url("../../../assets/icons/phone.png");
  }

  &__info-address {
    font-size: 23px;
    line-height: 41px;
    margin-bottom: 64px;
    background-size: 25px 31px;
    background-image: url("../../../assets/icons/marker.png");
  }

  &__map {
    width: 371px;
    height: 240px
  }

  &__marker {
    height: 33px;
    width: 28px;
  }
}

@media (max-width: 428px) {
  .footer-part {
    height: 265px;
    background-image: url("../../../assets/images/footer-bg-mob.png");
    background-size: 100% 265px;
    padding-top: 17px;
    padding-bottom: 15px;

    .container {
      padding: 0 16px;
    }

    .first {
      display: none;
    }

    .second {
      display: block;
    }

    &__menu-list {
      font-size: 9px;
      line-height: 11px;
      width: auto;
      margin-bottom: 18px;
    }

    &__menu-item-first,
    &__menu-item-second {
      margin-right: 0;
      margin-bottom: 10px;
    }

    &__info-producer {
      margin-top: 36px;
      font-size: 13px;
      line-height: 120%;
      width: 176px;
      margin-bottom: 29px;

      .info-producer-span {
        font-size: 18px;
        line-height: 26px;
        padding-bottom: 11px;
      }
    }

    &__img-liqpay {
      width: 103px;
      height: 23px;
      margin-bottom: 8px;
    }

    &__img {
      width: 58px;
      height: 39px;
    }

    &__img + &__img {
      margin-left: 24px;
    }

    &__other-info {
      display: none;
    }

    &__info-phone {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.1px;
      background-size: 9px 15px;
      padding-left: 15px;
      margin-bottom: 10px;
    }

    &__info-address {
      width: 150px;
      font-size: 12px;
      line-height: 100%;
      margin-bottom: 14px;
      padding-left: 15px;
      background-size: 12px 15px;
    }

    &__map {
      width: 148px;
      height: 96px;
    }

    &__marker {
      height: 15px;
      width: 12px;
    }
  }
}

@media (max-width: 390px) {
  .footer-part {

    &__info-producer {
      font-size: 12px;
      line-height: 120%;
      width: 170px;
      margin-bottom: 30px;
      margin-top: 44px;

      .info-producer-span {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__img-liqpay {
      width: 103px;
      height: 23px;
    }

    &__img {
      width: 53px;
      height: 36px;
    }

    &__img + &__img {
      margin-left: 22px;
    }
  }
}
</style>