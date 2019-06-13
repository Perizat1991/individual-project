<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        
        :img-src="img1"
      >
      <h1 class="slideText">Нет времени на подобор подходящего образа, а помощь стилиста - дорогое удовольствие?! </h1>
      <h1 class="slideText">Вы нашли лучшую платформу для этого!</h1></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      :img-src="img2">
        <h1 class="slideText">Здесь вы cможете найти любой лук, в любом магазине города, не выходя из дома</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="img3">
        <h1 class="slideText">Идеальная подборка аксессуаров к любым лукам</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          :src="img4"
          alt="image slot"
        >
        <h1 class="slideText">Мужчинам не придется больше переживать о несоответствии цветовой гаммы одежды в образе</h1>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide :img-src="img5">
        <h1 class="slideText">С нами вы будете выглядеть стильно даже в спортзале</h1>
      </b-carousel-slide>
    </b-carousel>
    
  </div>
</template>

<script>

import img2 from "../pics/slider/shopping.jpg"
import img3 from "../pics/slider/evening.jpg"
import img5 from "../pics/slider/sport.jpg"
import img4 from "../pics/slider/man1.jpg"
import img1 from "../pics/slider/looking.jpg"

  export default {
    name: 'slider',
    data() {
      return {
        slide: 0,
        sliding: null,
        img1,
        img2,
        img3,
        img4,
        img5
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style lang="sass">
  .slideText 
    font-family: 'Montserrat', sans-serif
    font-size: 30px
    font-weight: 900
    text-shadow: 4px 6px 15px rgba(0, 0, 1, 100)
    color: white
    background-color: rgba(51, 17, 0, .2)
    
    

    
  
</style>
