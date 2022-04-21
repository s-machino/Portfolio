<template>
  <div>
    <h1>Case 11</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">株式会社R / カラーズ</b>
        <a href="https://colors-info.com/" target="_blank" rel="noopener"
          >https://colors-info.com/</a
        >
        <p class="tool">
          Design / Adobe XD / React / Next.js / Typescript / Scss / microCMS / Vercel
        </p>
        <p>
          各店舗の空席数がタイムリーで確認できるJamstackなサイト。<br />
          フレームワークはNext.jsを使用しており、お客様で入力・管理できるようにとmicroCMSとVercelを連携させています。
        </p>
      </div>
      <div class="img_container_pc">
        <div class="img_wrap" v-for="image in images" :key="image.index">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="img_container_sp">
        <div class="img_wrap" v-for="image2 in images2" :key="image2.index">
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
          alt: 'カラーズPCメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_11-2_pc.jpg'),
          alt: 'カラーズPCメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_11-3_pc.jpg'),
          alt: 'カラーズPCメイン画像3',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_11-1_sp.png'),
          alt: 'カラーズSPメイン画像1',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_11-2_sp.png'),
          alt: 'カラーズSPメイン画像2',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_11-3_sp.png'),
          alt: 'カラーズSPメイン画像3',
        },
      ],
    };
  },
};
</script>
