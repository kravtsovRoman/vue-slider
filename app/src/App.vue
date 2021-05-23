<template>
  <div id="app">
    <KilometrixSlider :data="sliderConfig"/>

    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam architecto, cum eius excepturi
      fuga illo labore possimus quasi quos repellat sequi, suscipit voluptate, voluptates. Ad consectetur corporis cum
      dolor doloribus numquam obcaecati quas voluptatem! Adipisci aspernatur commodi consectetur debitis explicabo fuga
      magnam maiores nemo, porro quibusdam sequi vel vitae voluptatum! Animi culpa ducimus esse eum fugiat ipsam iure
      labore minima, nesciunt officia quisquam tenetur voluptas voluptates! Aliquam aliquid dolore dolores esse et
      inventore necessitatibus non saepe, vel! Ab architecto, error id in incidunt minus quaerat unde veritatis. Dolor
      in iste molestias odit repellat rerum saepe suscipit veniam. Alias amet assumenda, beatae corporis delectus
      doloribus earum eius est excepturi illum iste laboriosam, magni mollitia necessitatibus pariatur possimus quae
      ratione recusandae sed tempore, tenetur totam vero! Amet, asperiores doloribus et libero magni nam, neque odit
      omnis placeat possimus praesentium quibusdam quos, tempora! Alias aperiam architecto asperiores atque commodi
      consectetur, culpa dolorum earum esse eveniet fugiat hic minus nobis officiis omnis perspiciatis quam quibusdam
      quidem quo sequi suscipit tempore vel. Ad asperiores aut autem cupiditate dignissimos dolor dolorem eos eum fugit
      hic minima officia perspiciatis placeat quaerat quas reiciendis rem, repellendus reprehenderit ullam vero.
      Architecto, cumque dignissimos dolorum fugit incidunt libero, nam perspiciatis quae quo sed similique, velit?
      Asperiores atque consequuntur corporis debitis deserunt distinctio ea eligendi enim fuga, iste laborum maxime
      molestiae odio, perspiciatis quos ratione repellendus saepe sint, temporibus vel. Accusamus alias aliquid
      assumenda at, culpa deserunt earum, facilis ipsum laborum minus mollitia nisi perspiciatis quos reprehenderit
      tempora totam unde. Accusamus dolorem eaque earum eos eveniet modi ut. Facere quae ut veniam! Architecto assumenda
      corporis dicta earum eligendi facere fugiat fugit illo in ipsam itaque laboriosam necessitatibus nemo, nobis odit
      omnis provident quae quasi quo sapiente sed sint tenetur. Aliquam consectetur, debitis dolorem doloribus
      perspiciatis sequi! Accusamus aliquid amet, architecto asperiores aspernatur commodi consectetur consequatur
      cupiditate debitis dignissimos dolores excepturi exercitationem fugiat in incidunt iste modi nemo neque nihil non
      nostrum, odio officiis praesentium quae quisquam quod sapiente sint tempora voluptates, voluptatum? Accusamus,
      aliquam aspernatur deleniti eius eos, error hic magni molestias mollitia praesentium sed suscipit. Adipisci aut
      beatae consectetur dolor ducimus ex hic minima, nobis pariatur, quisquam rem sapiente totam vel. Cum distinctio
      ducimus ea eaque error laboriosam maiores maxime nemo nisi recusandae, saepe sunt, vitae voluptate. Facilis magnam
      pariatur similique temporibus! Alias amet aut autem corporis dignissimos error, ex illum impedit ipsum laboriosam
      laborum, molestiae necessitatibus nemo qui quo totam, ut vel vero? Asperiores delectus eum libero placeat quia,
      quisquam vel voluptatem! Ab adipisci aliquid animi assumenda blanditiis dignissimos, error eveniet excepturi
      expedita id ipsa iste itaque laborum laudantium molestiae neque nisi non nostrum odit quasi, ratione repellendus
      reprehenderit sapiente sint sit totam ullam veniam. Accusantium aut, cumque dolor esse est eum explicabo fugit
      iste iure magni, maiores nesciunt nobis non officia optio quae quam quasi quo repellat rerum sit tempore unde
      voluptate. Alias earum eligendi enim? Debitis dolores hic in maiores pariatur possimus ratione suscipit voluptatem
      voluptates. Eveniet hic minima quibusdam totam voluptatem. Ea, officia, porro.
    </div>
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
