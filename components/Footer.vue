<template>
  <footer class="footer">
    <a href="https://github.com/s-machino" target="_brank" rel="noopener" class="footer-icon">
      <img src="@/assets/images/common/github_icon.svg" width="24px" height="24px"
    /></a>
    <p class="footer-copy">{{ new Date().getFullYear() }} - Satomi's Portfolio Site</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include flex(center, center);
  height: $tbHeight;

  &-icon {
    margin-right: 16px;
    @include flex(center, center);
  }

  &-copy {
    text-align: center;
    font-family: $quick;
  }
}
</style>
