<template>
  <div>
    <h1>Case 01</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">株式会社井口石材</b>
        <a
          href="https://iguchisekizai.co.jp/"
          target="_blank"
          rel="noopener"
          class="case-datail__link"
          >https://iguchisekizai.co.jp/</a
        >
        <p class="case-datail__tool">Direction / Design / Photoshop / HTML / Scss / Javascript</p>
        <p class="case-datail__text">
          老舗である石材店様のコーポレートサイト。本件ではディレクションから携わらせていただきました。<br />
          新しいサービスである「ソウルジュエリー」の紹介もしつつ、メインは歴史ある寺院墓地やサービス内容などの紹介。<br />
          ターゲットが高齢層ということもあり、見やすく、かつ落ち着きのあるデザインを意識いたしました。
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
          src: require('@/assets/images/works/works_10-1_pc.jpg'),
          alt: '株式会社井口石材PCメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_10-2_pc.jpg'),
          alt: '株式会社井口石材PCメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_10-3_pc.jpg'),
          alt: '株式会社井口石材PCメイン画像3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_10-1_sp.png'),
          alt: '株式会社井口石材SPメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_10-2_sp.png'),
          alt: '株式会社井口石材SPメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_10-3_sp.png'),
          alt: '株式会社井口石材SPメイン画像3',
        },
      ],
    }
  },
}
</script>
