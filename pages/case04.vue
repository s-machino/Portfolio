<template>
  <div>
    <h1>Case 04</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">NKワークス株式会社</b>
        <a href="https://nk-works.co.jp/" target="_blank" rel="noopener">https://nk-works.co.jp/</a>
        <p class="tool">Design / Photoshop / HTML / Scss / Javascript</p>
        <p>
          産業用機械の専門商社様のコーポレートサイト。総ページ数100ページを超える大型サイト。<br />
          ページ数が多いのでユーザーが迷子にならないよう、メガドロップダウンを採用。<br />
          製品ごとの特徴や仕様など見やすさとスタイリッシュさを重視したサイトデザインとなっております。
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
          src: require('@/assets/images/works/works_04-1_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_04-2_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_04-3_pc.jpg'),
          alt: '有限会社ステップファクトリーPC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_04-1_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_04-2_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_04-3_sp.png'),
          alt: '有限会社ステップファクトリーSP',
        },
      ],
    };
  },
};
</script>
