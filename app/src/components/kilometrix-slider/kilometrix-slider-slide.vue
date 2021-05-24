<template>
  <div class="kilometrix-slider__slide kilometrix-slide" :style="`background-image: url(${data.imagePath}});`">
    <div class="kilometrix-slide__content">
      <h2 class="kilometrix-slide__title">
          <span
              v-for="(string, index) in data.title"
              :key="string.text + index"
              class="kilometrix-slide__text"
              :class="{ 'kilometrix-slide__text--active': string.activeColor }"
          >
            {{ string.text }}
          </span>
      </h2>

      <div class="kilometrix-slide__description">
        {{ data.description }}
      </div>

      <a class="kilometrix-slide__link" :href="data.link.href">
        {{ data.link.text }}
        <span class="arrow kilometrix-slide__arrow"></span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'KilometrixSliderSlide',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>