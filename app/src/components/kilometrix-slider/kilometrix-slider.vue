<template>
  <div class="kilometrix-slider">
    <div class="kilometrix-slider__container">

      <div class="kilometrix-slider__slides">
        <KilometrixSliderSlide
            v-for="(item, index) in data.slides"
            :key="item.id + index"
            :data="item"
            :class="activeSlide === index ? 'kilometrix-slide--active' : ''"
        />
      </div>

      <div class="kilometrix-slider__controls">
        <KilometrixSliderButton
            v-for="(item, index) in data.slides"
            :key="item.id + index"
            :button="item"
            :timeChangeSlide="data.timeChangeSlide"
            :index="index"
            :autoplay="autoplay"
            :activeSlide="activeSlide"
            :countSlides="data.slides.length"
            @changeSlide="changeSlide(index)"
            @stopSlider="stopSlider"
            @startSlider="startSlider"
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

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  components: {
    KilometrixSliderSlide,
    KilometrixSliderButton
  },

  data() {
    return {
      activeSlide: 0,
      autoplay: this.data.autoplay,
      interval: null,
      slidesLength: this.data.slides.length - 1,
    }
  },

  methods: {
    changeSlide(index) {
      clearInterval(this.interval)
      this.activeSlide = index > this.slidesLength ? 0 : index

      if (this.autoplay) {
        this.interval = setInterval(() => {
          this.changeSlide(++this.activeSlide)
        }, this.data.timeChangeSlide)
      } else {
        this.changeSlide(this.activeSlide)
      }
    },

    stopSlider() {
      clearInterval(this.interval)
    },

    startSlider() {
      if (this.autoplay) {
        this.changeSlide(this.activeSlide)
      }
    }
  },

  mounted() {
    this.startSlider()
  }
}
</script>