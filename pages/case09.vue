<template>
  <div>
    <h1>Case 09</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">合同会社ECOlead</b>
        <a href="https://ecolead1217.com/" target="_blank" rel="noopener">https://ecolead1217.com/</a>
        <p class="tool">Design / HTML / CSS / Javascript</p>
        <p>不用品回収/買取/遺品整理のサービス紹介サイト。いくつかHPをお持ちのお客様のサテライトサイト。<br>
            コンバージョンに繋がるようなサイトをご要望だったので、TOPページはプロモーションサイトのような構成・デザインに。<br>
            フラットアイコンや写真などを使い、サービス内容や魅力、メリットをわかりやすく紹介。<br>
          </p>
      </div>
      <div class="img_container_pc">
          <div class="img_wrap" v-for="image in images" :key="image.index"><img :src="image.src" :alt="image.alt"></div>
      </div>
      <div class="img_container_sp">
          <div class="img_wrap" v-for="image2 in images2" :key="image2.index"><img :src="image2.src" :alt="image2.alt"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
          return {
            images: [
              {
                index: 1,
                src: require("@/assets/images/works/works_09-1_pc.jpg"),
                alt: "合同会社ECOlead PCメイン画像1",
              },
              {
                index: 2,
                src: require("@/assets/images/works/works_09-2_pc.jpg"),
                alt: "合同会社ECOlead PCメイン画像2",
              },
              {
                index: 3,
                src: require("@/assets/images/works/works_09-3_pc.jpg"),
                alt: "合同会社ECOlead PCメイン画像3",
              },
            ],
            images2: [
              {
                index: 1,
                src: require("@/assets/images/works/works_09-1_sp.png"),
                alt: "合同会社ECOlead SPメイン画像1",
              },
              {
                index: 2,
                src: require("@/assets/images/works/works_09-2_sp.png"),
                alt: "合同会社ECOlead SPメイン画像2",
              },
              {
                index: 3,
                src: require("@/assets/images/works/works_09-3_sp.png"),
                alt: "合同会社ECOlead SPメイン画像3",
              },
            ],
          }
      }
  }
</script>