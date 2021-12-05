<template>
  <div>
    <h1>Works</h1>
      <div class="contents">
        <div class="box_container">
          <nuxt-link v-for="image in images" class="box_items" :to="image.link" :key="image.index">
            <img :src="image.src" :alt="image.alt">
            <div class="box_detail">
              <span class="title">{{ image.alt }}</span>
            </div>
          </nuxt-link>
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
                link: "/case01",
                src: require("@/assets/images/works/works_01_thumb.jpg"),
                alt: "イートラスト株式会社",
              },
              {
                index: 2,
                link: "/case02",
                src: require("@/assets/images/works/works_02_thumb.jpg"),
                alt: "株式会社NEXT STAGE",
              },
              {
                index: 3,
                link: "/case03",
                src: require("@/assets/images/works/works_03_thumb.jpg"),
                alt: "有限会社ステップファクトリー",
              },
              {
                index: 4,
                link: "/case04",
                src: require("@/assets/images/works/works_04_thumb.jpg"),
                alt: "NKワークス株式会社",
              },
              {
                index: 5,
                link: "/case05",
                src: require("@/assets/images/works/works_05_thumb.jpg"),
                alt: "アルファ・ジャパン",
              },
              {
                index: 6,
                link: "/case06",
                src: require("@/assets/images/works/works_06_thumb.jpg"),
                alt: "医療法人社団央優会",
              },
              {
                index: 7,
                link: "/case07",
                src: require("@/assets/images/works/works_07_thumb.jpg"),
                alt: "エンラボ",
              },
              {
                index: 8,
                link: "/case08",
                src: require("@/assets/images/works/works_08_thumb.jpg"),
                alt: "TRAM",
              },
              {
                index: 9,
                link: "/case09",
                src: require("@/assets/images/works/works_09_thumb.jpg"),
                alt: "合同会社ECOlead",
              },
              {
                index: 10,
                link: "/case10",
                src: require("@/assets/images/works/works_10_thumb.jpg"),
                alt: "株式会社井口石材",
              },
            ]
          }
      }
  }
</script>

<style lang="scss" scoped>
  .box_container{
    display: flex;
    flex-wrap: wrap;
    > a{
      width: 48%;
      display: block;
      margin-bottom: 4%;
      text-align: center;
      @include sp{
        width: 100%;
        &:not(:last-child){
          margin-bottom: 20px;
        }
        &-last-child{
          margin-bottom: 0;
        }
      }
      &:hover{
        img{
          transform: scale(1.05);
        }
      }
      img{
        border-radius: 5px;
        width: 100%;
        object-fit: cover;
        font-family: "object-fit: cover;";
        transition: .3s;
        filter:drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
      }
      &:not(:nth-child(2n)){
        margin-right: 4%;
        @include sp{
          margin-right: 0;
        }
      }
      .box{
        &_detail{
          margin-top: 12px;
          line-height: 1.8;
        }
      }
      .title{
        font-size: 16px;
        font-family: $noto;
        @include sp{
          font-size: 14px;
        }
      }
    }
  }
</style>
