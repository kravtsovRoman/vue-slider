<template>
  <div id="app">
    <KilometrixSlider :data="sliderConfig" />
  </div>
</template>

<script>

import sliderConfig from '@/config/kilometrix-slider'
import KilometrixSlider from '@/components/kilometrix-slider/kilometrix-slider'

export default {
  name: 'App',
  components: {
    KilometrixSlider
  },
  data() {
    return {
      sliderConfig: sliderConfig
    }
  }
}
</script>
