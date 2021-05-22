<template>
  <div class="kilometrix-slider__slide kilometrix-slide" :style="`background-image: url(${background}});`">

    <div class="kilometrix-slide__title">
      <h2>
        <span
            v-for="(string, index) in data.title"
            :key="string.text + index"
        >
          {{string.text}}
        </span>
      </h2>

      <div class="kilometrix-slide__description">
        {{data.description}}
      </div>

      <a :href="data.link.href">{{data.link.text}}</a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'KilometrixSliderSlide',

  props: ['data'],

  computed: {
    background(){
      return this.data.imagePath
    }
  }
}
</script>