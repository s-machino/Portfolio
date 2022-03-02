<template>
  <div>
    <nav v-if="windowWidth > 1024">
      <ul class="sp-nav">
          <li><nuxt-link to="/" active-class="active-list" exact>Home</nuxt-link></li>
          <li><nuxt-link to="/" active-class="active-list" exact>About</nuxt-link></li>
          <li><nuxt-link to="/works" active-class="active-list" exact>Works</nuxt-link></li>
          <li><nuxt-link to="/gallery" active-class="active-list" exact>Gallery</nuxt-link></li>
          <li><nuxt-link to="/contact" active-class="active-list" exact>Contact</nuxt-link></li>
      </ul>
    </nav>
    <div v-if="windowWidth > 1024" class="sp-nav-btn" @click="spNavClick">
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
    & li {
      height: 50px;
      line-height: 50px;
      & a {
        display: block;
        color: #fff;
      }
    }
    & li:not(:last-of-type) {
      border-bottom: 1px dotted #fff;
    }
  }
  .sp-nav-btn{
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 24px;
  }
</style>
