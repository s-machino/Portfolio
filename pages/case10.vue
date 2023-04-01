<template>
  <div>
    <h1>Case 10</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">イートラスト株式会社</b>
        <a
          href="https://hp-free.com/"
          target="_blank"
          rel="noopener"
          class="case-datail__link"
          >https://hp-free.com/</a
        >
        <p class="case-datail__tool">
          Design / Photoshop / Illustrator / HTML / Scss / Javascript
        </p>
        <p class="case-datail__text">
          ホームページ制作のプロモーションサイト。<br />
          『制作費0円』や『無料サポート』などの訴求ポイントから、ユーザーの導線を意識しつつ、下のコンテンツまで飽きさせないような遊び心のあるデザインに。
          企業としての「親しみやすさ」をユーザーに感じてもらうため、フラットデザインを採用しました。<br />
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
          src: require('@/assets/images/works/works_01-1_pc.jpg'),
          alt: 'イートラスト株式会社PC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_01-2_pc.jpg'),
          alt: 'イートラスト株式会社PC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_01-3_pc.jpg'),
          alt: 'イートラスト株式会社PC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_01-1_sp.png'),
          alt: 'イートラスト株式会社SP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_01-2_sp.png'),
          alt: 'イートラスト株式会社SP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_01-3_sp.png'),
          alt: 'イートラスト株式会社SP',
        },
      ],
    }
  },
}
</script>
