<template>
  <div class="footer-part">
    <div class="container">
      <div class="footer-part__blocks">

        <!-- First block -->
        <div class="footer-part__block">

          <p class="footer-part__info-rules first">
            Правила оплати, доставки та повернення коштів
          </p>

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
        </div>

        <!-- Second block -->
        <div class="footer-part__block">

          <p class="footer-part__info-rules second">
            Правила оплати, доставки та повернення коштів
          </p>

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

  &__info-rules {
    font-size: 23px;
    line-height: 41px;
    width: 329px;
    margin-bottom: 35px;
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
    background-size: 100% 265px;
    padding-top: 32px;
    padding-bottom: 20px;

    .container {
      padding: 0 16px;
    }

    .first {
      display: none;
    }

    .second {
      display: inline-block;
    }

    &__info-rules {
      font-size: 12px;
      line-height: 23px;
      width: 181px;
      margin-bottom: 10px;
    }

    &__info-producer {
      margin-top: 27px;
      font-size: 12px;
      line-height: 120%;
      width: 189px;
      margin-bottom: 29px;

      .info-producer-span {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 10px;
      }
    }

    &__img-liqpay {
      width: 103px;
      height: 23px;
      margin-bottom: 8px;
    }

    &__img {
      width: 53px;
      height: 36px;
    }

    &__img + &__img {
      margin-left: 22px;
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
      margin-bottom: 10px;
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
    &__info-rules {
      font-size: 10px;
      line-height: 23px;
      width: 143px;
      margin-bottom: 10px;
    }
  }
}
</style>