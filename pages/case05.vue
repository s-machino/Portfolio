<template>
  <div>
    <h1>Case 05</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">アルファ・ジャパン</b>
        <a href="https://mining-express.net/" target="_blank" rel="noopener">https://mining-express.net/</a>
        <p class="tool">Design / HTML / CSS / Javascript</p>
        <p>
          データセンター事業されているお客様のコーポレートサイト。<br />
          ポイントとしては固定の「ENGLISH」ボタンで、ページ毎に翻訳ページに飛べるよう、Javascriptで実装いたしました。<br />
          他にも、埋め込んでいるGoogleカレンダーが15日を基準に月が切り替わるように実装するなど、クライアントの要望に沿った仕組みを構築いたしました。
        </p>
      </div>
      <div class="img_container_pc">
        <div class="img_wrap" v-for="image in images" :key="image.index"><img :src="image.src" :alt="image.alt" /></div>
      </div>
      <div class="img_container_sp">
        <div class="img_wrap" v-for="image2 in images2" :key="image2.index"><img :src="image2.src" :alt="image2.alt" /></div>
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
    };
  },
};
</script>
