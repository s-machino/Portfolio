<template>
  <div>
    <nav v-if="windowWidth > 1024">
      <ul class="sp-nav">
        <li class="sp-nav__item">
          <nuxt-link to="/" class="sp-nav__link" active-class="active-list" exact>Home</nuxt-link>
        </li>
        <li class="sp-nav__item">
          <nuxt-link to="/" class="sp-nav__link" active-class="active-list" exact>About</nuxt-link>
        </li>
        <li class="sp-nav__item">
          <nuxt-link to="/works" class="sp-nav__link" active-class="active-list" exact
            >Works</nuxt-link
          >
        </li>
        <li class="sp-nav__item">
          <nuxt-link to="/gallery" class="sp-nav__link" active-class="active-list" exact
            >Gallery</nuxt-link
          >
        </li>
        <li class="sp-nav__item">
          <nuxt-link to="/contact" class="sp-nav__link" active-class="active-list" exact
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <div v-if="windowWidth > 1024" class="sp-nav__btn" v-click="spNavClick">
      <i class="fas fa-times" v-if="spNavFlag"></i>
      <i class="fas fa-bars" v-else></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sp-nav {
  transform: translate(0, 66px);
  position: fixed;
  width: 100%;
  z-index: 9999;
  text-align: center;
  background: rgba(24, 24, 24, 0.9);

  &__item {
    height: 50px;
    line-height: 50px;
    &:not(:last-of-type) {
      border-bottom: 1px dotted #fff;
    }
  }

  &__link {
    display: block;
    color: #fff;
  }

  &__btn {
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 24px;
  }
}
</style>
