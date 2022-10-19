<template>
  <div>
    <h1>Case 09</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">合同会社ECOlead</b>
        <a href="https://ecolead1217.com/" target="_blank" rel="noopener" class="case-datail__link"
          >https://ecolead1217.com/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <!-- <p class="case-datail__text">
          不用品回収/買取/遺品整理のサービス紹介サイト。コンバージョンに繋がるようなサイトをご要望でしたので、<br />
          TOPページはプロモーションサイトのようなメリハリのある構成・デザインに。<br />
          フラットアイコンや写真などを使い、サービス内容や魅力、メリットをわかりやすく紹介。<br />
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
          src: require('@/assets/images/works/works_09-1_pc.jpg'),
          alt: '合同会社ECOlead PCメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_09-2_pc.jpg'),
          alt: '合同会社ECOlead PCメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_09-3_pc.jpg'),
          alt: '合同会社ECOlead PCメイン画像3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_09-1_sp.png'),
          alt: '合同会社ECOlead SPメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_09-2_sp.png'),
          alt: '合同会社ECOlead SPメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_09-3_sp.png'),
          alt: '合同会社ECOlead SPメイン画像3',
        },
      ],
    }
  },
}
</script>
