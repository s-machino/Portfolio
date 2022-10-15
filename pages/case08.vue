<template>
  <div>
    <h1>Case 08</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">TRAM</b>
        <a href="https://tram2014.com/" target="_blank" rel="noopener" class="case-datail__link"
          >https://tram2014.com/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <!-- <p class="case-datail__text">
          美容室・サロンの店舗紹介サイト。<br />
          フォントや余白感・使用する画像にもこだわり、店舗のテーマが「ヨーロッパの路面電車」とのことで、海外風の洗練されたサイトデザインに。<br />
          ローディングアニメーションから始まり、各コンテンツにも飽きさせないような遊び心のあるアニメーションを実装。
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
          src: require('@/assets/images/works/works_08-1_pc.jpg'),
          alt: 'TRAM PCメイン1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_08-2_pc.jpg'),
          alt: 'TRAM PCメイン2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_08-3_pc.jpg'),
          alt: 'TRAM PCメイン3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_08-1_sp.png'),
          alt: 'TRAM SPメイン1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_08-2_sp.png'),
          alt: 'TRAM SPメイン2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_08-3_sp.png'),
          alt: 'TRAM SPメイン3',
        },
      ],
    }
  },
}
</script>
