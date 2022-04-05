<template>
  <section class="home">
    <h1 class="home-title">Satomi's Portfolio</h1>
  </section>
</template>

<style lang="scss" scoped>
.home {
  @include flex(center, center);
  height: calc(100vh - (#{$tbHeight} + #{$tbHeight}));

  &-title {
    width: 100%;
  }
}
</style>
