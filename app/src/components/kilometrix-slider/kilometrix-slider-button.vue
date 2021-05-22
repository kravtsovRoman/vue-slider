<template>
  <div class="kilometrix-slider__button kilometrix-button" @click="changeSlide(index + 1)">

    <div class="kilometrix-button__progress">
      <div class="kilometrix-button__progress-active"></div>
    </div>

    <div class="kilometrix-button__wrap">
      <div class="kilometrix-button__number">{{index + 1}}</div>
      <span class="kilometrix-button__text">{{data.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KilometrixSliderButton',

  props: ['data', 'index'],

  methods: {
    changeSlide(index) {
      this.$emit('changeSlide', index)
    }
  }
}
</script>