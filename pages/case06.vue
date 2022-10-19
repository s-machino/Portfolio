<template>
  <div>
    <h1>Case 06</h1>
    <div class="contents">
      <div class="case-datail">
        <b class="case-datail__name">医療法人社団央優会</b>
        <a href="https://oyukai-lc.net/" target="_blank" rel="noopener" class="case-datail__link"
          >https://oyukai-lc.net/</a
        >
        <p class="case-datail__tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <!-- <p class="case-datail__text">
          レディースクリニック様の医院紹介サイト。<br />
          トンマナに関しては、高級感のある美しい院内内観に合わせ、品のあるシンプルでスタイリッシュなものに。<br />
          WEB予約が容易にできるよう、ボタンは常時固定を採用いたしました。
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
          src: require('@/assets/images/works/works_06-1_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_06-2_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_06-3_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_06-1_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_06-2_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_06-3_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
      ],
    }
  },
}
</script>
