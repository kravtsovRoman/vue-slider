<template>
  <div
      class="kilometrix-slider__button kilometrix-button"
      @click="changeSlide(index)"
      :class="{ 'kilometrix-button--active': isActive }"
  >

    <div class="kilometrix-button__progress">
        <div
            class="kilometrix-button__progress-inside"
            :class="{ 'kilometrix-button__progress-inside--active': isActive }"
            :style="`animation-duration: ${duration}s`"
        ></div>
    </div>

    <div class="kilometrix-button__wrap">
      <div class="kilometrix-button__number">{{index}}</div>
      <span class="kilometrix-button__text">{{data.buttonTitle}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KilometrixSliderButton',
  props: ['data', 'index', 'activeSlide', 'timeChangeSlide'],

  computed: {
    isActive(){
      return this.activeSlide === this.index
    },
    duration(){
      return this.timeChangeSlide / 1000
    }
  },

  methods: {
    changeSlide(index) {
      this.$emit('changeSlide', index)
    }
  },
}
</script>