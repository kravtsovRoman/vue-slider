<template>
  <div class="kilometrix-slider">
    <div class="kilometrix-slider__container">

      <div class="kilometrix-slider__slides">
        <KilometrixSliderSlide
            v-for="(item, index) in data.slides"
            :key="item.id + index"
            :data="item"
            :slide="index+1"
            :class="activeSlide === index+1 ? 'kilometrix-slide--active' : ''"
        />
      </div>

      <div class="kilometrix-slider__controls">
        <KilometrixSliderButton
            v-for="(button, index) in data.controls"
            :key="button.title + index"
            :data="button"
            :index="index"
            @changeSlide="changeActiveSlide"
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

  data(){
    return {
      activeSlide: 1,
      interval: null,
    }
  },

  methods: {
    changeSlide(){
      this.interval = setInterval(() => {
        if(this.activeSlide >= this.data.slides.length) {
          this.activeSlide = 0
        }
        this.activeSlide++
      }, this.data.timeChangeSlide)
    },

    changeActiveSlide(index){
      this.activeSlide = index
      clearInterval(this.interval)
      this.changeSlide()
    }
  },

  components: {
    KilometrixSliderSlide,
    KilometrixSliderButton
  },

  mounted() {
    this.changeSlide()
  },

  destroyed() {
    clearInterval(this.interval)
  }
}
</script>