<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import '@/assets/scss/common.scss'
import '@/assets/scss/case.scss'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: 0.5s cubic-bezier(1, 0.25, 0.25, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}
</style>
