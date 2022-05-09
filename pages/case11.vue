<template>
  <div>
    <h1>Case 11</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">株式会社空のはね</b>
        <a href="https://soranohane.com/" target="_blank" rel="noopener" class="case-datail__link"
          >https://soranohane.com/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <p class="case-datail__text">
          幼稚園のグループサイト。<br />
          楽しく明るい園の雰囲気に合わせ、全体的にワクワク感を想起させるようなかわいらしくポップなデザインに。<br />
          フォントはラノベPOPフォントで楽しく、読みやすく。<br />
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
          src: require('@/assets/images/works/works_11-1_pc.jpg'),
          alt: '空のはねPCメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_11-2_pc.jpg'),
          alt: '空のはねPCメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_11-3_pc.jpg'),
          alt: '空のはねPCメイン画像3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_11-1_sp.png'),
          alt: '空のはねSPメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_11-2_sp.png'),
          alt: '空のはねSPメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_11-3_sp.png'),
          alt: '空のはねSPメイン画像3',
        },
      ],
    }
  },
}
</script>
