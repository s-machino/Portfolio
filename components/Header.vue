<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" active-class="is-active" exact>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link" active-class="is-active">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/works" class="nav-link" active-class="is-active">Works</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/gallery" class="nav-link" active-class="is-active">Gallery</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/contact" class="nav-link" active-class="is-active">Contact</nuxt-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  height: $tbHeight;
  max-width: 100%;
  @include flex(center, center);

  &-list {
    @include flex(center, unset);
  }

  &-item {
    margin: 0 20px;
  }

  &-link {
    font-family: $quick;
    font-weight: 500;
    &.is-active {
      border-bottom: 1px solid;
      padding-bottom: 5px;
    }
  }
}
</style>
