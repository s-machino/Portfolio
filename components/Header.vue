<template>
  <div>
    <nav>
      <ul class="gnav">
        <li><nuxt-link to="/" active-class="active-list" exact>Home</nuxt-link></li>
        <li><nuxt-link to="/about" active-class="active-list">About</nuxt-link></li>
        <li><nuxt-link to="/works" active-class="active-list">Works</nuxt-link></li>
        <li><nuxt-link to="/gallery" active-class="active-list">Gallery</nuxt-link></li>
        <!-- <li><nuxt-link to="/contact" active-class="active-list">Contact</nuxt-link></li> -->
      </ul>
    </nav>
  </div>
</template>


<style lang="scss" scoped>
  nav {
    height: $tbHeight;
    max-width: 100%;
    @include flex(center,center);
    ul {
      display: flex;
      justify-content: center;
      li {
        margin: 0 20px;
        a {
          font-family: $quick;
          font-weight: 500;
          &.active-list {
            border-bottom: 1px solid;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
</style>



