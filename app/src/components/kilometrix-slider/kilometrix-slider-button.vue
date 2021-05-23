<template>
  <div
      class="kilometrix-slider__button kilometrix-button"
      @click="changeSlide(index)"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      :class="{ 'kilometrix-button--active': isActive}"
  >

    <div class="kilometrix-button__progress" v-if="autoplay">
      <div
          class="kilometrix-button__progress-inside"
          :style="`animation-duration: ${duration}s`"
          :class="{'kilometrix-button__progress-inside--active': isActive, 'kilometrix-button__progress-inside--hovered': isHovered}"
      ></div>
    </div>

    <div class="kilometrix-button__wrap">
      <div class="kilometrix-button__number">{{ number }}</div>
      <span class="kilometrix-button__text">{{ button.buttonTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KilometrixSliderButton',

  props: {
    button: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true,
      default: 0
    },
    activeSlide: {
      type: Number,
      required: true,
      default: 0
    },
    timeChangeSlide: {
      type: Number,
      required: true,
      default: 5000
    },
    autoplay: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      isHovered: false,
    }
  },

  computed: {
    isActive() {
      return this.activeSlide === this.index
    },

    duration() {
      return this.autoplay ? this.timeChangeSlide / 1000 : 0
    },

    number(){
      return (this.index < 10 ? '0'+(this.index+1) : this.index+1)
    }
  },

  methods: {
    changeSlide(index) {
      this.$emit('changeSlide', index)
    },

    mouseEnter() {
      if (this.isActive) {
        this.isHovered = true
        this.$emit('stopSlider')
      }
    },

    mouseLeave() {
      if (this.isActive) {
        this.isHovered = false
        this.$emit('startSlider')
      }
    },
  },
}
</script>