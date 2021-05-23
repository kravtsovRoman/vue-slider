<template>
  <div class="kilometrix-slider">
    <div class="kilometrix-slider__container">

      <div class="kilometrix-slider__slides">
        <KilometrixSliderSlide
            v-for="(item, index) in data.slides"
            :key="item.id + index"
            :data="item"
            :slide="index"
            :class="activeSlide === index ? 'kilometrix-slide--active' : ''"
        />
      </div>

      <div class="kilometrix-slider__controls">
        <KilometrixSliderButton
            v-for="(item, index) in data.slides"
            :key="item.id + index"
            :data="item"
            :timeChangeSlide="data.timeChangeSlide"
            :index="index"
            :activeSlide="activeSlide"
            @changeSlide="changeSlide(index)"
        />
      </div>

    </div>
  </div>
</template>

<script>

import KilometrixSliderSlide from '@/components/kilometrix-slider/kilometrix-slider-slide'
import KilometrixSliderButton from '@/components/kilometrix-slider/kilometrix-slider-button'

export default {
  name: 'KilometrixSlider',
  props: ['data'],
  components: {
    KilometrixSliderSlide,
    KilometrixSliderButton
  },

  data(){
    return {
      activeSlide: 0,
      interval: null,
      slidesLength: this.data.slides.length - 1,
    }
  },

  methods: {
    changeSlide(index){
      clearInterval(this.interval)
      this.activeSlide = index > this.slidesLength ? 0 : index

      this.interval = setInterval(() => {
        this.changeSlide(++this.activeSlide)
      }, this.data.timeChangeSlide)
    },
  },

  mounted() {
    this.changeSlide(this.activeSlide)
  }
}
</script>