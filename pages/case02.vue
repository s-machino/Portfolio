<template>
  <div>
    <h1>Case 02</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">株式会社NEXT STAGE</b>
        <a
          href="https://next-stage.chiba.jp/"
          target="_blank"
          rel="noopener"
          class="case-datail__link"
          >https://next-stage.chiba.jp/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <!-- <p class="case-datail__text">
          退職代行サービスのプロモーションサイト。<br />
          設立されたばかりということもあり、コンバージョンに繋がるようなUIを意識。<br />
          フォームに誘導するようなデザイン、CVボタンに動きを加えるなど工夫させていただきました。
        </p> -->
      </div>
      <div class="img-container__pc">
        <div v-for="image in images" :key="image.index" class="img-wrap">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="img-container__sp">
        <div v-for="image2 in images2" :key="image2.index" class="img-wrap">
          <img :src="image2.src" :alt="image2.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          index: 1,
          src: require('@/assets/images/works/works_02-1_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_02-2_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_02-3_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_02-1_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_02-2_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_02-3_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
      ],
    }
  },
}
</script>
