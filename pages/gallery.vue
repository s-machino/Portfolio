<template>
  <div>
    <h1>Gallery</h1>
    <div class="contents">
      <div class="card-wrapper">
        <a
          class="card"
          v-for="image in images"
          :key="image.index"
          :href="image.link"
          target="_blank"
          rel="noopener"
        >
          <img :src="image.src" :alt="image.alt" class="card-image" loading="lazy" />
          <div class="card-detail">
            <span class="card-category">{{ image.category }}</span>
            <span class="card-text">
              <span class="card-date">{{ image.date }} </span>|
              <span class="card-title">{{ image.alt }}</span>
            </span>
          </div>
        </a>
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
          link: 'https://hp-free.com/',
          src: require('@/assets/images/gallery/gallery_01.jpg'),
          alt: 'イートラスト株式会社',
          date: '2020.08',
          category: 'Webサービス・アプリ',
        },
        {
          index: 2,
          link: 'https://shinkens.com/',
          src: require('@/assets/images/gallery/gallery_02.jpg'),
          alt: '株式会社新研設備工業',
          date: '2020.07',
          category: '機械・電機・工業',
        },
        {
          index: 3,
          src: require('@/assets/images/gallery/gallery_03.jpg'),
          alt: '株式会社NEXT STAGE',
          date: '2021.6',
          category: '求人・人材・転職',
        },
        {
          index: 4,
          link: 'https://micasa-2020.jp/',
          src: require('@/assets/images/gallery/gallery_04.jpg'),
          alt: 'ミ・カーサ株式会社',
          date: '2020.08',
          category: '建築・建設・不動産',
        },
        {
          index: 5,
          link: 'https://sankeipr.co.jp/',
          src: require('@/assets/images/gallery/gallery_05.jpg'),
          alt: '有限会社三恵ピーアール',
          date: '2021.05',
          category: '物流・工場',
        },
        {
          index: 6,
          link: 'http://hotelapps.tv/',
          src: require('@/assets/images/gallery/gallery_06.jpg'),
          alt: 'トータルサポート株式会社',
          date: '2020.06',
          category: '機械・電機・工業',
        },
        {
          index: 7,
          link: 'https://u-clinic.yokohama/',
          src: require('@/assets/images/gallery/gallery_07.jpg'),
          alt: '医療法人横浜医仁 上田クリニック',
          date: '2020.01',
          category: '病院・健康・薬',
        },
        {
          index: 8,
          link: 'https://ogumashearing.co.jp/',
          src: require('@/assets/images/gallery/gallery_08.jpg'),
          alt: '有限会社尾熊シャーリング',
          date: '2020.01',
          category: '機械・電機・工業',
        },
        {
          index: 9,
          link: 'https://tigre-jp.com/',
          src: require('@/assets/images/gallery/gallery_09.jpg'),
          alt: '株式会社ティグレ',
          date: '2021.02',
          category: '美容・化粧品・ケア用品',
        },
        {
          index: 10,
          link: 'https://chigasakiseika.jp/',
          src: require('@/assets/images/gallery/gallery_10.jpg'),
          alt: '株式会社茅ヶ崎青果地方卸売市場',
          date: '2020.04',
          category: '農業・自然・漁業',
        },
        {
          index: 11,
          link: 'https://shibashimo.com/',
          src: require('@/assets/images/gallery/gallery_11.jpg'),
          alt: 'しばしも接骨院',
          date: '2021.05',
          category: '病院・健康・薬',
        },
        {
          index: 12,
          link: 'https://fccoast.com/',
          src: require('@/assets/images/gallery/gallery_12.jpg'),
          alt: '株式会社マルトモ商事',
          date: '2021.09',
          category: '運動・スポーツ・ジム',
        },
        {
          index: 13,
          link: 'https://shinko-material.com/',
          src: require('@/assets/images/gallery/gallery_13.jpg'),
          alt: '新光マテリアル',
          date: '2020.04',
          category: '建築・建設・不動産',
        },
        {
          index: 14,
          link: 'https://kunimoto-hp.medicru.net/lp/',
          src: require('@/assets/images/gallery/gallery_14.jpg'),
          alt: 'くにもと病院',
          date: '2021.04',
          category: '病院・健康・薬',
        },
        {
          index: 15,
          link: 'https://iguchisekizai.co.jp/',
          src: require('@/assets/images/gallery/gallery_15.jpg'),
          alt: '株式会社井口石材',
          date: '2020.08',
          category: '葬儀・お墓',
        },
        {
          index: 16,
          link: 'https://taguchijyuseikatsu.com/',
          src: require('@/assets/images/gallery/gallery_16.jpg'),
          alt: '株式会社田口住生活設計室',
          date: '2020.11',
          category: '建築・建設・不動産',
        },
        {
          index: 17,
          link: 'https://imafuku.jp/',
          src: require('@/assets/images/gallery/gallery_17.jpg'),
          alt: '有限会社イマフク',
          date: '2020.07',
          category: '病院・健康・薬',
        },
        {
          index: 18,
          link: 'https://stepfactory.co.jp/',
          src: require('@/assets/images/gallery/gallery_18.jpg'),
          alt: '有限会社ステップファクトリー',
          date: '2020.11',
          category: 'ファッション・アパレル',
        },
        {
          index: 19,
          link: 'https://la-cima-hairroom.com/',
          src: require('@/assets/images/gallery/gallery_19.jpg'),
          alt: 'Hair room LA-CIMA',
          date: '2020.10',
          category: '美容室・サロン・エステ',
        },
        {
          index: 20,
          link: 'https://ashia-japan.co.jp/',
          src: require('@/assets/images/gallery/gallery_20.jpg'),
          alt: '株式会社ASHIA・JAPAN',
          date: '2020.11',
          category: '企画・制作・開発',
        },
        {
          index: 21,
          link: 'https://oneoeight.yokohama/',
          src: require('@/assets/images/gallery/gallery_21.jpg'),
          alt: 'One O Eight',
          date: '2020.10',
          category: '美容室・サロン・エステ',
        },
        {
          index: 22,
          link: 'https://suzukihigashi-noen.jp/',
          src: require('@/assets/images/gallery/gallery_22.jpg'),
          alt: '鈴木(東)農園',
          date: '2020.10',
          category: '農業・自然・漁業',
        },
        {
          index: 23,
          link: 'https://cut-in-move.com/',
          src: require('@/assets/images/gallery/gallery_23.jpg'),
          alt: 'カットインムーヴ',
          date: '2021.06',
          category: '美容室・サロン・エステ',
        },
        {
          index: 24,
          link: 'https://fukaidk.co.jp/',
          src: require('@/assets/images/gallery/gallery_24.jpg'),
          alt: '深井電気株式会社',
          date: '2021.03',
          category: '機械・電機・工業',
        },
        {
          index: 25,
          link: 'https://katatsumuri-k.jp/',
          src: require('@/assets/images/gallery/gallery_25.jpg'),
          alt: '小さな鉄板焼き 小高屋',
          date: '2020.08',
          category: 'デザイン・アート・ものづくり',
        },
        {
          index: 26,
          link: 'https://ouka-seikotsuin.com/',
          src: require('@/assets/images/gallery/gallery_26.jpg'),
          alt: 'おうか整骨院',
          date: '2021.08',
          category: '病院・健康・薬',
        },
        {
          index: 27,
          link: 'https://jpf-stk.tokyo/',
          src: require('@/assets/images/gallery/gallery_27.jpg'),
          alt: '有限会社ジェイ・ピー・フィットネス',
          date: '2021.09',
          category: '運動・スポーツ・ジム',
        },
        {
          index: 28,
          link: 'https://tram2014.com/',
          src: require('@/assets/images/gallery/gallery_28.jpg'),
          alt: 'TRAM',
          date: '2021.10',
          category: '美容室・サロン・エステ',
        },
        {
          index: 29,
          link: 'https://grandpa.tokyo/',
          src: require('@/assets/images/gallery/gallery_29.jpg'),
          alt: '日本フードプロフェッショナル株式会社',
          date: '2021.09',
          category: '飲食店・グルメ',
        },
        {
          index: 30,
          link: 'https://studio-r.info/',
          src: require('@/assets/images/gallery/gallery_30.jpg'),
          alt: '岸理映子シェイプアップスタジオR',
          date: '2021.07',
          category: '運動・スポーツ・ジム',
        },
        {
          index: 31,
          link: 'https://enn-lab.co.jp/lp/',
          src: require('@/assets/images/gallery/gallery_31.jpg'),
          alt: 'エンラボ',
          date: '2021.09',
          category: '福祉・介護・支援　',
        },
        {
          index: 32,
          link: 'https://ho-wa.net/',
          src: require('@/assets/images/gallery/gallery_32.jpg'),
          alt: '豊和',
          date: '2021.09',
          category: '飲食店・グルメ',
        },
        {
          index: 33,
          link: 'https://p-kagurazaka.co.jp/',
          src: require('@/assets/images/gallery/gallery_33.jpg'),
          alt: '株式会社神楽坂パッケージ',
          date: '2021.07',
          category: '企画・制作・開発',
        },
        {
          index: 34,
          link: 'https://bisou-y.com/',
          src: require('@/assets/images/gallery/gallery_34.jpg'),
          alt: 'イートラスト株式会社',
          date: '2020.08',
          category: '機械・電機・工業',
        },
        {
          index: 35,
          link: 'https://shimizu-cc.com/',
          src: require('@/assets/images/gallery/gallery_35.jpg'),
          alt: '医療法人社団日清会',
          date: '2021.06',
          category: '病院・健康・薬',
        },
        {
          index: 36,
          link: 'https://oyukai-lc.net/',
          src: require('@/assets/images/gallery/gallery_36.jpg'),
          alt: '医療法人社団央優会',
          date: '2021.08',
          category: '病院・健康・薬',
        },
        {
          index: 37,
          link: 'https://shirakaba-lo.com/',
          src: require('@/assets/images/gallery/gallery_37.jpg'),
          alt: '白樺法律事務所',
          date: '2021.06',
          category: '金融・保険・法律',
        },
        {
          index: 38,
          link: 'https://saira-nls.com/',
          src: require('@/assets/images/gallery/gallery_38.jpg'),
          alt: '株式会社サイラ',
          date: '2021.11',
          category: '美容・化粧品・ケア用品',
        },
        {
          index: 39,
          link: 'https://nanairo-kotsujiko.com/',
          src: require('@/assets/images/gallery/gallery_39.jpg'),
          alt: 'なないろ整骨院',
          date: '2020.11',
          category: '病院・健康・薬',
        },
        {
          index: 40,
          link: 'https://tochigi-kyojunokai-lp.medicru.net/',
          src: require('@/assets/images/gallery/gallery_40.jpg'),
          alt: '栃木エリア巨樹の会',
          date: '2020.08',
          category: '病院・健康・薬',
        },
        {
          index: 41,
          link: 'https://shoeiteck.co.jp/',
          src: require('@/assets/images/gallery/gallery_41.jpg'),
          alt: '株式会社湘栄テック',
          date: '2021.11',
          category: '機械・電機・工業',
        },
        // {
        //   index: 42,
        //   link: 'https://angeduverre.net/',
        //   src: require('@/assets/images/gallery/gallery_42.jpg'),
        //   alt: '株式会社アンジュドヴェール',
        //   date: '2021.09',
        //   category: '建築・建設・不動産',
        // },
        {
          index: 43,
          link: 'https://yagi-musen.co.jp/',
          src: require('@/assets/images/gallery/gallery_43.jpg'),
          alt: '八木商事有限会社',
          date: '2021.09',
          category: '家電・生活用品',
        },
        {
          index: 44,
          link: 'https://yharada-tax.com/',
          src: require('@/assets/images/gallery/gallery_44.jpg'),
          alt: '原田佳典税理士事務所',
          date: '2021.07',
          category: '金融・保険・法律',
        },
        {
          index: 45,
          link: 'https://nk-works.co.jp/',
          src: require('@/assets/images/gallery/gallery_45.jpg'),
          alt: 'NKワークス株式会社',
          date: '2020.12',
          category: '機械・電機・工業',
        },
        {
          index: 46,
          link: 'https://fukushima-dk.com/',
          src: require('@/assets/images/gallery/gallery_46.jpg'),
          alt: '福島電気工事株式会社',
          date: '2021.03',
          category: '機械・電機・工業',
        },
        {
          index: 47,
          link: 'https://saeda-dental.com/',
          src: require('@/assets/images/gallery/gallery_47.jpg'),
          alt: 'さえだ歯科医院',
          date: '2021.04',
          category: '病院・健康・薬',
        },
        // {
        //   index: 48,
        //   link: 'https://mining-express.net/',
        //   src: require('@/assets/images/gallery/gallery_48.jpg'),
        //   alt: 'アルファ・ジャパン',
        //   date: '2021.02',
        //   category: 'ビジネス・会社',
        // },
        {
          index: 49,
          link: 'https://restaurant-crescere.com/',
          src: require('@/assets/images/gallery/gallery_49.jpg'),
          alt: 'crescere',
          date: '2021.11',
          category: '飲食店・グルメ',
        },
        {
          index: 50,
          link: 'https://kawada-kougyou.com/',
          src: require('@/assets/images/gallery/gallery_50.jpg'),
          alt: '株式会社河田工業',
          date: '2020.04',
          category: '機械・電機・工業',
        },
        {
          index: 51,
          link: 'https://kyokujitsu-group.com/',
          src: require('@/assets/images/gallery/gallery_51.jpg'),
          alt: '旭日建設株式会社',
          date: '2020.12',
          category: '建築・建設・不動産',
        },
        {
          index: 52,
          link: 'https://ecolead1217.com/',
          src: require('@/assets/images/gallery/gallery_52.jpg'),
          alt: '合同会社ECOlead',
          date: '2021.12',
          category: '家電・生活用品',
        },
        {
          index: 53,
          link: 'https://kusunoki-h.tokyo/',
          src: require('@/assets/images/gallery/gallery_53.jpg'),
          alt: '合同会社くすのき保育園',
          date: '2021.11',
          category: '学校・教育・保育園・幼稚園',
        },
        // {
        //   index: 54,
        //   link: "https://elp35.jp/",
        //   src: require("@/assets/images/gallery/gallery_54.jpg"),
        //   alt: "株式会社ELP35",
        //   date: "2021.12",
        //   category: "家電・生活用品"
        // },
        {
          index: 55,
          link: 'https://apps.apple.com/jp/app/bxi-5g/id1530321262',
          src: require('@/assets/images/gallery/gallery_55.jpg'),
          alt: '自社CMSアプリロゴ',
          date: '2020.9',
          category: 'ロゴ制作',
        },
        {
          index: 56,
          link: 'http://lp.smart-setsubi.com/',
          src: require('@/assets/images/gallery/gallery_56.jpg'),
          alt: 'スマート設備',
          date: '2021.12',
          category: '家電・生活用品',
        },
        {
          index: 57,
          link: 'https://kintoki-an.com/',
          src: require('@/assets/images/gallery/gallery_57.jpg'),
          alt: 'きんとき',
          date: '2021.12',
          category: '飲食店・グルメ',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 30.6%;
  display: block;
  margin-bottom: 4%;
  @include tab {
    width: 48%;
  }
  &:not(:nth-child(3n)) {
    margin-right: 4%;
    @include tab {
      margin-right: 0;
    }
  }
  &:not(:nth-child(2n)) {
    @include tab {
      margin-right: 4%;
    }
  }
  &:hover {
    .card-image {
      transform: scale(1.05);
    }
  }

  &-image {
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
    transition: 0.3s;
    @include box-shadow(0, 3px, 12px, 0, rgba(black, 0.2));
  }

  &-wrapper {
    @include flex(unset, unset);
    flex-wrap: wrap;
  }

  &-detail {
    font-size: 13px;
    line-height: 2.4;
    margin-top: 10px;
    align-items: center;
    @include sp {
      font-size: 11px;
    }
  }

  &-text {
    display: block;
  }

  &-date {
    padding-right: 5px;
  }

  &-title {
    padding-left: 5px;
  }

  &-category {
    background: #eee;
    border-radius: 2px;
    padding: 3px 5px;
  }
}
</style>
