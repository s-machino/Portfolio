<template>
  <div>
    <h1>Case 05</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">アルファ・ジャパン</b>
        <!-- <a href="https://mining-express.net/" target="_blank" rel="noopener" class="case-datail__link">https://mining-express.net/</a> -->
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <p class="case-datail__text">
          データセンター事業されている企業様のコーポレートサイト。<br />
          ポイントとしては固定の「ENGLISH」ボタンで、ページ毎に翻訳ページに飛べるよう、Javascriptで実装いたしました。<br />
          他にも、埋め込んでいるGoogleカレンダーが15日を基準に月が切り替わるように実装するなど、クライアントの要望に沿った仕組みを構築いたしました。
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
          src: require('@/assets/images/works/works_05-1_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_05-2_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_05-3_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_05-1_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_05-2_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_05-3_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
      ],
    }
  },
}
</script>
