<template>
  <div class="main">
    <h1>Satomi's Portfolio</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2.6em;
  width: 100%;
  @include sp {
    font-size: 2em;
  }
}
.main {
  height: calc(100vh - (#{$tbHeight} + #{$tbHeight}));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
