<template>
  <div>
    <h1>Case 10</h1>
    <div class="contents">
      <div class="case_datail">
        <b class="name">株式会社井口石材</b>
        <a href="https://iguchisekizai.co.jp/" target="_blank" rel="noopener">https://iguchisekizai.co.jp/</a>
        <p class="tool">Direction / Design / HTML / CSS / Javascript</p>
        <p>東京都練馬区にある老舗の石材店様。本件ではディレクションから携わらせていただきました。<br>
        新しいサービスである「ソウルジュエリー」の紹介もしつつ、メインは歴史ある寺院墓地やサービス内容などの紹介。<br>
        ターゲットが割と高齢ということもあり、見やすく・シンプルなデザインを意識いたしました。</p>
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
                src: require("@/assets/images/works/works_10-1_pc.jpg"),
                alt: "株式会社井口石材PCメイン画像1",
              },
              {
                index: 2,
                src: require("@/assets/images/works/works_10-2_pc.jpg"),
                alt: "株式会社井口石材PCメイン画像2",
              },
              {
                index: 3,
                src: require("@/assets/images/works/works_10-3_pc.jpg"),
                alt: "株式会社井口石材PCメイン画像3",
              },
            ],
            images2: [
              {
                index: 1,
                src: require("@/assets/images/works/works_10-1_sp.png"),
                alt: "株式会社井口石材SPメイン画像1",
              },
              {
                index: 2,
                src: require("@/assets/images/works/works_10-2_sp.png"),
                alt: "株式会社井口石材SPメイン画像2",
              },
              {
                index: 3,
                src: require("@/assets/images/works/works_10-3_sp.png"),
                alt: "株式会社井口石材SPメイン画像3",
              },
            ],
          }
      }
  }
</script>