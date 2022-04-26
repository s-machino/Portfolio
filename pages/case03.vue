<template>
  <div>
    <h1>Case 03</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">有限会社ステップファクトリー</b>
        <a
          href="https://stepfactory.co.jp/"
          target="_blank"
          rel="noopener"
          class="case-datail__link"
          >https://stepfactory.co.jp/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <p class="case-datail__text">
          企画・生産・営業・販売支援のトータルサポートをされている企業様のコーポレートサイト。<br />
          国内外でサービス展開されていることもあり、どこか洋風、ボタンデザインも少し個性のあるものに。
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
          src: require('@/assets/images/works/works_03-1_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_03-2_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_03-3_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_03-1_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_03-2_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_03-3_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
      ],
    }
  },
}
</script>
