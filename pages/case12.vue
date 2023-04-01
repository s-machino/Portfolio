<template>
  <div>
    <h1>Case 12</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">株式会社R / カラーズ</b>
        <a
          href="https://colors-info.com/"
          target="_blank"
          rel="noopener"
          class="case-datail__link"
          >https://colors-info.com/</a
        >
        <p class="case-datail__tool">
          Design / Adobe XD / React / Next.js / Typescript / Atomic Design /
          Scss / microCMS / GA4
        </p>
        <p class="case-datail__text">
          各店舗の空席数がタイムリーで確認できるJamstackなサイト。<br />
          フレームワークはNext.jsを採用しており、microCMSとAPI連携させています。<br />
          更新・公開された順にコンテンツを昇順表示される仕様にしています。
        </p>
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
          src: require('@/assets/images/works/works_12-1_pc.jpg'),
          alt: 'カラーズPCメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_12-2_pc.jpg'),
          alt: 'カラーズPCメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_12-3_pc.jpg'),
          alt: 'カラーズPCメイン画像3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_12-1_sp.png'),
          alt: 'カラーズSPメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_12-2_sp.png'),
          alt: 'カラーズSPメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_12-3_sp.png'),
          alt: 'カラーズSPメイン画像3',
        },
      ],
    }
  },
}
</script>
