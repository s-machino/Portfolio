<template>
  <div>
    <h1>Case 01</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">イートラスト株式会社</b>
        <a href="https://hp-free.com/" target="_blank" rel="noopener">https://hp-free.com/</a>
        <p class="tool">Design / HTML / CSS / Javascript</p>
        <p>
          ホームページ制作会社のプロモーションサイト。<br />
          『制作費0円』や『無料サポート』など、豊富なサービス内容をより見ていただけるよう、下のコンテンツまで飽きさせないような遊び心のあるデザインに。<br />
          また制作会社としての親しみやすさが伝わるようなフラットデザインを採用、コンバージョンにつながるようなUIを心掛けました。<br />
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
    };
  },
};
</script>
