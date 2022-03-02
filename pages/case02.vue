<template>
  <div>
    <h1>Case 02</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">株式会社NEXT STAGE</b>
        <p class="tool">Design / HTML / CSS / Javascript</p>
        <p>
          千葉県初の退職代行サービス展開をされているお客様のプロモーションサイト。<br />
          設立されたばかりの会社様ということもあり、とにかくコンバージョンに繋がるようなUIデザインを意識。<br />
          問い合わせに誘導するようなデザイン、動きを加えるなど各パーツにも一工夫させていただきました。
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
          src: require('@/assets/images/works/works_02-1_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_02-2_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_02-3_pc.jpg'),
          alt: '株式会社NEXT STAGE PC',
        },
      ],
      images2: [
        {
          index: 1,
          src: require('@/assets/images/works/works_02-1_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
        {
          index: 2,
          src: require('@/assets/images/works/works_02-2_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
        {
          index: 3,
          src: require('@/assets/images/works/works_02-3_sp.png'),
          alt: '株式会社NEXT STAGE SP',
        },
      ],
    };
  },
};
</script>
